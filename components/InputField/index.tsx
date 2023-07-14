import { useState } from "react";
import { TextInputValidator, ValueChanged } from "../../utils/interface";
import styles from "./styles.module.scss";

export declare type InputProps = {
  label: string;
  placeholder: string;
  required?: boolean;
  secure?: boolean;
  prefix?: any;
  className?: string;
  inputClassName?: string;
  onChanged: ValueChanged<string>;
  disable?: boolean;
  value?: string;
  validator?: TextInputValidator;
};

export default function InputField({
  label,
  placeholder,
  required,
  secure = false,
  prefix,
  onChanged: onChange,
  className = "",
  inputClassName = "",
  disable: disabled = false,
  value = "",
  validator,
}: InputProps) {
  const [text, setText] = useState(value || "");

  function handleChange(text: string) {
    onChange(text);
    setText(text);
  }
  const message = validator ? validator(text) : "";
  return (
    <div className={[styles.inputContainer, className].join(" ")}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <div className={[styles.input, inputClassName].join(" ")}>
        {prefix}
        <input
          className={styles.inputfield}
          value={text}
          placeholder={placeholder}
          onChange={(event) => handleChange(event.target.value)}
          type={secure ? "password" : "text"}
          disabled={disabled}
        />
      </div>
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}
