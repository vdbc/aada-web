import { ValueChanged } from "../../utils/interface";
import styles from "./styles.module.scss";

declare type InputProps = {
  label: string;
  placeholder: string;
  required?: boolean;
  secure?: boolean;
  prefix?: any;
  className?: string;
  onChange: ValueChanged<string>;
};

export default function InputField({
  label,
  placeholder,
  required,
  secure = false,
  prefix,
  onChange,
  className = "",
}: InputProps) {
  return (
    <div className={[styles.inputContainer, className].join(" ")}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>

      <div className={styles.input}>
        {prefix}
        <input
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          type={secure ? "password" : "text"}
        />
      </div>
    </div>
  );
}
