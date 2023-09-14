import Image from "next/image";
import Link from "next/link";
import { MdArrowForward, MdExpandMore } from "react-icons/md";
import ButtonLink from "../ButtonLink";
import styles from "./styles.module.scss";

const defaultAlbum = [
  {
    title: "2023 AADA Winners’ Night",
    description:
      "On the evening of August 14th, the Winners’ Night of the 2023 Asia Architecture Design Awards (AADA),stood in the spotlight at Marina Bay Sands – a pinnacle of architectural brilliance within Singapore, Asia’s vanguard metropolis.",
  },

];

export default function _View() {
  return (
    <div className={styles.wrapper}>
      {defaultAlbum.map((item, index) => (
        <div key={index} className={styles.box}>
          <h2>{item.title}</h2>
          <div className={styles.para}>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}