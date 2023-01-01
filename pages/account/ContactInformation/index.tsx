import InputField from "../../../components/InputField";
import { useAppSelector } from "../../../store";
import { selectOrganization } from "../../../store/modules/user";
import { ValueChanged } from "../../../utils/interface";
import InputPhoneNumber from "../InputPhoneNumber";
import styles from "./styles.module.scss";

export default function _View() {
  const organization = useAppSelector(selectOrganization);

  const onChanged: ValueChanged<any> = (organization) => {};

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Organization contact</h2>
      <InputField
        label="Organization name"
        placeholder="Please type your organization name here"
        value={organization?.name}
        onChanged={(value) => onChanged({ ...organization, name: value })}
        required
      />
      <InputField
        label="Country"
        placeholder="Select your Country"
        onChanged={(value) => onChanged({ ...organization, country: value })}
        required
      />
      <div className={styles.wrapperRow}>
        <div>
          <InputField
            label="City"
            placeholder="Type your city"
            onChanged={(value) => onChanged({ ...organization, city: value })}
            required
          />
        </div>
        <div>
          <InputField
            label="ZIP / Postal Code"
            placeholder="Your ZIP code"
            onChanged={(value) =>
              onChanged({ ...organization, zipCode: value })
            }
            required
          />
        </div>
      </div>
      <InputField
        label="Address"
        placeholder="Please type your address"
        onChanged={(value) => onChanged({ ...organization, address: value })}
        required
      />
      <InputField
        label="Email"
        placeholder="Please type your organization email address"
        onChanged={(value) => onChanged({ ...organization, email: value })}
        required
      />
      <InputPhoneNumber
        label="Phone Number"
        placeholder="Enter your phone number"
        onChanged={(value) => onChanged({ ...organization, phone: value })}
        className={styles.inputField}
      />
      <div style={{ height: 12 }} />
      <h2 className={styles.title}>Marketing contact</h2>
      <div className={styles.wrapperRow}>
        <div>
          <InputField
            label="First Name"
            placeholder="First name"
            onChanged={(value) => onChanged({ ...organization, city: value })}
          />
        </div>
        <div>
          <InputField
            label="Last Name"
            placeholder="Last Name"
            onChanged={(value) =>
              onChanged({ ...organization, zipCode: value })
            }
          />
        </div>
      </div>
      <InputField
        label="Email"
        placeholder="Please type your email"
        onChanged={(value) => onChanged({ ...organization, email: value })}
      />
      <InputPhoneNumber
        label="Phone Number"
        placeholder="Enter your phone number"
        onChanged={(value) => onChanged({ ...organization, phone: value })}
        className={styles.inputField}
      />
    </div>
  );
}
