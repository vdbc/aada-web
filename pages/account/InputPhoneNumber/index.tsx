import InputField, { InputProps } from "../../../components/InputField";
import styles from "./styles.module.scss";
import { countries } from "../../../utils/countries";

declare type CountryPhone = {
  name: string;
  flag: string;
  value: string;
};
function SelectLocale(props: CountryPhone) {
  return (
    <div className={styles.selectLocaleContainer}>
      <div className={styles.values}>
        <span>{props.flag}</span>
        <span>{props.name}</span>
        <span>{props.value}</span>
      </div>
    </div>
  );
}

export default function _View(props: InputProps) {
  return (
    <>
      <select>
        {countries.map((country) => (
          <option key={country.name}>
            <SelectLocale
              name={country.name}
              flag={country.flag}
              value={country.value}
            />
          </option>
        ))}
      </select>

    </>
  );
}
