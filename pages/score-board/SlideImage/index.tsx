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

import { getProjectImages } from "../../../utils/project-nominate";
import styles from "./styles.module.scss";
import { ProjectNominateEntry } from "../../../models/NominateModel";

SwiperCore.use([Navigation, Pagination]);

declare type ViewProps = {
  project: ProjectNominateEntry;
};

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
