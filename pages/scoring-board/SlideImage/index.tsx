import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useAppSelector } from "../../../store";
import { selectProjectNomintateDetail } from "../../../store/modules/nominate";
import {
  getProjectImages,
  getProjectName,
} from "../../../utils/project-nominate";
import styles from "./styles.module.scss";

SwiperCore.use([Navigation, Pagination]);

declare type ViewProps = {
  projectId: number;
};

export default function _View({ projectId }: ViewProps) {
  const project = useAppSelector(selectProjectNomintateDetail(projectId));

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
              src={imageUrl}
              alt={`Project image ${index}`}
              className={styles.swiperImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
