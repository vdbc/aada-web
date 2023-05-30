import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { keyBy } from "lodash";
import { utc } from "moment";
import Image from "next/image";
import { useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useAppSelector } from "../../../store";
import { selectUserId } from "../../../store/modules/user";
import { storage } from "../../../utils/firebase";
import { ImagesInputValidator, ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

const MAX_OF_IMAGE = 10;
const MAX_OF_SIZE = 5 * 1024 * 1024;

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

interface ImageItem {
  url?: string;
  file?: File;
  base64?: string;
  id: number;
  isUploaded: boolean;
  progress: number;
}

let staticId = 0;

async function getBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result?.toString() ?? "");
    };
    reader.onerror = reject;
  });
}

function uploadImage(
  item: ImageItem,
  userId: string,
  onProgressChanged: ValueChanged<number>
): Promise<ImageItem> {
  return new Promise((resolve, reject) => {
    if (!item.file) reject("Item is empty");

    const file = item.file!;
    const prefix = utc(new Date()).format("YYYYMMDD_hh:mm:ss");
    const storageRef = ref(storage, `files/${userId}/${prefix}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgressChanged(progress);
      },
      reject,
      async () => {
        const url = await getDownloadURL(storageRef);
        resolve({
          ...item,
          progress: 1,
          isUploaded: true,
          url,
        });
      }
    );
  });
}

function getImageSrc({ url, base64 }: ImageItem) {
  return url || base64 || "";
}

declare type ImageItemProps = {
  image: ImageItem;
  disable: boolean;
  onRemove: VoidFunction;
};

function ImageItemComponent({ image, disable, onRemove }: ImageItemProps) {
  const src = getImageSrc(image);
  const isActive = image.isUploaded;
  const progress = image.progress;

  return (
    <div className={styles.singleImageContainer}>
      <Image
        className={isActive ? styles.active : styles.inactive}
        src={src}
        alt={src}
        fill
      />
      {!isActive && (
        <div className={styles.loadingContainer}>
          <CircularProgressWithLabel value={progress} />
        </div>
      )}
      {!disable && (
        <div className={styles.removeContainer}>
          <button onClick={onRemove}>
            <IoMdClose size={15} />
          </button>
        </div>
      )}
    </div>
  );
}

declare type ViewProps = {
  label: string;
  value: string[];
  disable: boolean;
  onChanged: ValueChanged<string[]>;
  validator?: ImagesInputValidator;
};
export default function _View({
  label,
  value,
  disable,
  onChanged,
  validator,
}: ViewProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<ImageItem[]>(
    (value || []).map((url) => ({
      url,
      id: staticId++,
      isUploaded: true,
      progress: 1,
    }))
  );
  const userId = useAppSelector(selectUserId) ?? "";
  const canAddImage =
    images.length < MAX_OF_IMAGE &&
    images.findIndex((item) => !item.isUploaded) == -1;
  const message = validator
    ? validator(images.map((item) => item.url ?? ""))
    : "";

  return (
    <div className={styles.container}>
      <input
        ref={ref}
        onChange={async (e) => {
          const _files = e.target.files ?? [];

          if (_files.length == 0) return;
          if (images.length + _files.length > MAX_OF_IMAGE) {
            alert(`You can only select up to ${MAX_OF_IMAGE} photos`);
            return;
          }
          const files: File[] = [];
          for (let i = 0; i < _files.length; i++) {
            const file = _files[i];
            if (file.size > MAX_OF_SIZE) {
              alert("Image is too big!");
              return;
            }
            files.push(file);
          }
          const imageBase64 = await Promise.all(files.map(getBase64));
          const unUploadImages = files.map((file, index) => ({
            url: "",
            file: file,
            base64: imageBase64[index],
            isUploaded: false,
            progress: 0,
            id: staticId++,
          }));
          const newImages = [...images, ...unUploadImages];
          setImages(newImages);
          const imageUploaded = await Promise.all(
            unUploadImages.map((item) =>
              uploadImage(item, userId, (progress) => {
                const updateImages = newImages.map((image) =>
                  image.id == item.id
                    ? {
                        ...image,
                        progress: progress,
                      }
                    : image
                );
                setImages(updateImages);
              })
            )
          );
          const details = keyBy(imageUploaded, (image) => image.id);
          const allImages = newImages.map((item) => {
            if (details[item.id]) return details[item.id];
            return item;
          });
          setImages(allImages);
          onChanged(
            allImages.map((item) => item.url ?? "").filter((item) => item)
          );
        }}
        id="file-upload"
        type="file"
        accept="image/png, image/jpg, image/jpeg"
        multiple
        hidden
      />
      <div className={styles.label}>{label}</div>
      <div className={styles.inputBox}>
        <div className={styles.groupImages}>
          {images.map((image) => (
            <ImageItemComponent
              key={image.id}
              image={image}
              disable={disable}
              onRemove={() => {
                const allImages = images.filter((img) => img.id != image.id);
                setImages(allImages);
                onChanged(
                  allImages.map((item) => item.url ?? "").filter((item) => item)
                );
              }}
            />
          ))}
        </div>
        <button
          className={styles.button}
          onClick={canAddImage ? () => ref.current?.click() : undefined}
          disabled={!canAddImage || disable}
        >
          Upload
        </button>
      </div>
      <div className={styles.desc}>
        You can upload a maximum of 10 photos. Each photo should not exceed 5MB.
        <br />
        Only PNG, JPG & JPEGs formats are accepted.
      </div>
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}
