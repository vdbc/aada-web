import InputField from "../../../components/InputField";
import { useAppSelector } from "../../../store";
import { selectProjectNomintateDetail } from "../../../store/modules/nominate";
import { getProjectName } from "../../../utils/project-nominate";
import styles from "./styles.module.scss";

function _onChangeDefault(value: string) {}

declare type ViewProps = {
  projectId: number;
};
export default function _View({ projectId }: ViewProps) {
  const project = useAppSelector(selectProjectNomintateDetail(projectId));
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
          placeholder={getProjectName(project)}
          onChanged={_onChangeDefault}
          disable
        />
        <div className={styles.country}>
          <InputField
            label="Country"
            placeholder={project?.country?.toString()}
            onChanged={_onChangeDefault}
            disable
          />
          <InputField
            className={styles.city}
            label="City"
            placeholder={project?.location?.toString()}
            onChanged={_onChangeDefault}
            disable
          />
        </div>
      </div>
    </div>
  );
}
