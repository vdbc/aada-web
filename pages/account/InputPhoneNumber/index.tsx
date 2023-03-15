import { InputProps } from "../../../components/InputField";
import styles from "./styles.module.scss";
import { countries } from "../../../utils/countries";
import { useState } from "react";

declare type CountryPhone = {
  flag: string;
  value: string;
};
function SelectLocale(props: CountryPhone) {
  return (
    <div className={styles.selectLocaleContainer}>
      <div className={styles.values}>
        {props.flag} {props.value}
      </div>
    </div>
  );
}

export default function _View({
  label,
  placeholder,
  required,
  onChanged: onChange,
  value = "",
  validator,
}: InputProps) {
  const [countryCodeIndex, setCountryCodeIndex] = useState(
    countries.findIndex((country) => {
      const matchResult = value.match(/\((.*?)\)/);
      if (matchResult && matchResult.length > 1) {
        return country.value === matchResult[1];
      }
      return false;
    })
  );
  const [selectedCountry, setSelectedCountry] = useState(
    countries[countryCodeIndex > 0 ? countryCodeIndex : 0].value
  );
  const [text, setText] = useState(value.split(")")[1] || "");
  function handleChange(text: string) {
    onChange("(" + selectedCountry + ")" + text);
    setText(text);
  }

  const message = validator ? validator(text) : "";
  return (
    <div className={styles.inputPhoneContainer}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <div className={styles.phoneInput}>
        <select
          className={styles.countryCode}
          onChange={(e) => setSelectedCountry(e.target.value)}
          defaultValue={
            countries[countryCodeIndex > 0 ? countryCodeIndex : 0].value
          }
        >
          {countries.map((country) => (
            <option key={country.name} value={country.value}>
              <SelectLocale flag={country.flag} value={country.value} />
            </option>
          ))}
        </select>
        <input
          value={text}
          className={styles.phoneNumber}
          placeholder={placeholder}
          onChange={(event) => handleChange(event.target.value)}
          type="text"
        />
      </div>
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}
