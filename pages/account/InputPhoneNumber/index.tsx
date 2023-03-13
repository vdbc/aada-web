import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import InputField, { InputProps } from "../../../components/InputField";
import { countries } from "../../../utils/countries";
import styles from "./styles.module.scss";

declare type CountryPhone = {
  flag: string;
  value: string;
};

function SelectLocale(props: CountryPhone) {
  return (
    <div className={styles.selectLocaleContainer}>
      <div className={styles.values}>
        <span>{props.flag}</span>
        <span>{props.value}</span>
      </div>
    </div>
  );
}

export default function _View(props: InputProps) {
  return (
    <div className={styles.wrapper}>
      <p>Phone Number</p>
      <div className={styles.phoneInput}>
        <select className={styles.countryCode}>
          {countries.map((country) => (
            <option key={country.name}>
              <SelectLocale flag={country.flag} value={country.value} />
            </option>
          ))}
        </select>
        <input
          className={styles.phoneNumber}
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}
