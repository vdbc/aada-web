import InputField from "../../../components/InputField";
import ProgressBar from "../../../components/ProgressBar";
import styles from "./styles.module.scss";

function _onChangeDefault(value: string) {}

export default function _View() {
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <InputField
          label="Entry ID"
          placeholder="<EntryID>"
          onChange={_onChangeDefault}
        />
        <InputField
          label="Entry Name"
          placeholder="<EntryName>"
          onChange={_onChangeDefault}
        />
        <InputField
          label="Deadline"
          placeholder="<DeadlineDate>"
          onChange={_onChangeDefault}
        />
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
