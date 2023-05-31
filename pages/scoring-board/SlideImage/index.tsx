import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { ProjectNominateEntry } from "../../../models/NominateModel";
import { getProjectImages } from "../../../utils/project-nominate";
import styles from "./styles.module.scss";

SwiperCore.use([Navigation, Pagination]);

declare type ViewProps = {
  project: ProjectNominateEntry;
};

const fileServices = [
  "https://files-uat.aadawards.com",
  "https://files.aadawards.com",
];

function getImageUrl(url: string): string {
  for (let index = 0; index < fileServices.length; index++) {
    const fileService = fileServices[index];
    if (url.startsWith(fileService)) return `${url}?format=webp&size=w1000`;
  }
  return url;
}

export default function _View({ project }: ViewProps) {
  return (
    <div className={styles.container}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.mySwiper}
      >
        {getProjectImages(project).map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={getImageUrl(imageUrl)}
              alt={`Project image ${index}`}
              className={styles.swiperImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
