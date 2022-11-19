import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { MdArrowForward } from "react-icons/md";

export default function _View() {
  return (
    <div className={styles.container}>
      <h1>WHY YOU SHOULD SUBMIT</h1>
      <div className={styles.subTitle}>
        Winning the 2023 ASIA ARCHITECTURE DESIGN AWARDS is a prestigious
        accolade, giving you an enhanced branding identity on an international
        level and augmenting your global profile.
      </div>
      <div className={styles.spacer} />
      <div className={styles.image}>
        <div>
          <Image
            alt="Award Categories"
            src="/home/why_you_should_submit.svg"
            fill
          />
        </div>
      </div>
    </div>
  );
}
