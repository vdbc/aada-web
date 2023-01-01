import InputField from "../../../components/InputField";
import ProgressBar from "../../../components/ProgressBar";
import { useAppSelector } from "../../../store";
import { selectProjectNomintateDetail } from "../../../store/modules/nominate";
import { getOverviewProgressPercent } from "../../../utils/project-nominate";
import styles from "./styles.module.scss";

function _onChangeDefault(value: string) {}

declare type ViewProps = {
  projectId: number;
};
export default function _View({ projectId }: ViewProps) {
  const project = useAppSelector(selectProjectNomintateDetail(projectId));
  const percent = getOverviewProgressPercent(project);

  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <InputField
          label="Entry ID"
          placeholder={project?.id?.toString()}
          onChanged={_onChangeDefault}
          disable
        />
        <InputField
          label="Entry Name"
          placeholder={project?.name}
          onChanged={_onChangeDefault}
          disable
        />
        <InputField
          label="Deadline"
          placeholder="<DeadlineDate>"
          onChanged={_onChangeDefault}
          disable
        />
      </div>
      <div className={styles.progressContainer}>
        <div>Progress</div>
        <div className={styles.progress}>
          <ProgressBar percent={percent} />
        </div>
        <div>{Math.round(percent)}%</div>
      </div>
    </div>
  );
}
