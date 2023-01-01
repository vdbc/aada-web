import InputField from "../../../components/InputField";
import { useAppSelector } from "../../../store";
import { selectOrganization } from "../../../store/modules/user";
import { ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

export default function _View() {
  const organization = useAppSelector(selectOrganization);

  const onChanged: ValueChanged<any> = (organization) => {};

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Username & Password</h2>
      <InputField
        label="Email Address"
        placeholder="Email Address"
        onChanged={(value) => onChanged({ ...organization, name: value })}
      />
      <div style={{ height: 12 }} />
      <h2 className={styles.title}>Change your password</h2>
      <InputField
        label="Your current password"
        placeholder="Enter your current password"
        onChanged={(value) => onChanged({ ...organization, email: value })}
        required
      />
      <InputField
        label="Type a new password"
        placeholder="Enter your new passowrd"
        onChanged={(value) => onChanged({ ...organization, email: value })}
        required
      />
      <InputField
        label="Confirm your new password"
        placeholder="Re-enter your new passowrd"
        onChanged={(value) => onChanged({ ...organization, email: value })}
        required
      />
    </div>
  );
}
