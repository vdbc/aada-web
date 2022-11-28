import styles from "./styles.module.scss";

declare type InputProps = {
  label: string;
  placeholder: string;
  required?: boolean;
};

export default function InputField({
  label,
  placeholder,
  required,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <input placeholder={placeholder} />
    </div>
  );
}
