import { ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type InputProps = {
  label: string;
  placeholder: string;
  required?: boolean;
  secure?: boolean;
  onChange: ValueChanged<string>;
};

export default function InputField({
  label,
  placeholder,
  required,
  secure = false,
  onChange,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <input
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        type={secure ? "password" : "text"}
      />
    </div>
  );
}
