import { ValueChanged } from "../../utils/interface";
import styles from "./styles.module.scss";

declare type InputProps = {
  label: string;
  placeholder: string;
  required?: boolean;
  secure?: boolean;
  prefix?: any;
  className?: string;
  onChanged: ValueChanged<string>;
  disable?: boolean;
  value?: string;
};

export default function InputField({
  label,
  placeholder,
  required,
  secure = false,
  prefix,
  onChanged: onChange,
  className = "",
  disable: disabled = false,
  value = "",
}: InputProps) {
  return (
    <div className={[styles.inputContainer, className].join(" ")}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>

      <div className={styles.input}>
        {prefix}
        <input
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          type={secure ? "password" : "text"}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
