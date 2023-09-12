import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdExpandMore } from "react-icons/md";
import ButtonLink from "../ButtonLink";
import styles from "./styles.module.scss";

declare type AlbumBannerProps = {
  id: number;
};

export default function _View({ id }: AlbumBannerProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        {/* <h2>{title}</h2> */}
        <div className={styles.para}>
          {/* <p>{description}</p> */}

        </div>
      </div>
    </div>

  );
}
