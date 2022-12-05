import ProgressBar from "../../../components/ProgressBar";
import { ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type InputFieldProps = {
  label: string;
  placeholder: string;
  onChanged?: ValueChanged<string>;
};

function InputField({
  label,
  placeholder,
  onChanged = (value) => {},
}: InputFieldProps) {
  return (
    <div className={styles.inputField}>
      <div>{label}</div>
      <input
        placeholder={placeholder}
        onChange={(event) => onChanged(event.target.value)}
      />
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <InputField label="Entry ID" placeholder="<EntryID>" />
        <InputField label="Entry Name" placeholder="<EntryName>" />
        <InputField label="Deadline" placeholder="<DeadlineDate>" />
      </div>
      <div className={styles.progressContainer}>
        <div>Progress</div>
        <div className={styles.progress}>
          <ProgressBar percent={30} />
        </div>
        <div>30%</div>
      </div>
    </div>
  );
}
