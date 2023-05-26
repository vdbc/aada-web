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
import styles from "./styles.module.scss";
import { useState } from "react";

SwiperCore.use([Navigation, Pagination]);

declare type ViewProps = {
  projectId: number;
};

export default function _View({ projectId }: ViewProps) {
  const project = useAppSelector(selectProjectNomintateDetail(projectId));
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const numbers: number[] = [1, 2, 3, 4, 5];

  function isNumberSelected(): boolean {
    return selectedNumber !== null;
  }

  return (
    <div className={styles.inputAboutField}>
      <div className={styles.numberSelector}>
        {numbers.map((number) => (
          <button
            key={number}
            className={styles.score}
            onClick={() => setSelectedNumber(number)}
            style={{
              backgroundColor: selectedNumber === number ? "#a67f56" : "white",
            }}
          >
            {number}
          </button>
        ))}
        {isNumberSelected() ? (
          <p>You have selected {selectedNumber}</p>
        ) : (
          <p>Please select a number</p>
        )}
      </div>
    </div>
  );
}
