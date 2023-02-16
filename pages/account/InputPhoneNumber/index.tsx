import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import InputField, { InputProps } from "../../../components/InputField";
import styles from "./styles.module.scss";

function SelectLocale() {
  return (
    <div className={styles.selectLocaleContainer}>
      <Image src="/flag_vn.svg" alt="Flag VN" width={33} height={22} />
      <div className={styles.value}>+84</div>
      <IoIosArrowDown />
    </div>
  );
}

export default function _View(props: InputProps) {
  return <InputField {...props} />;
}
