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
      <h2 className={styles.title}>Billing address</h2>
      <InputField
        label="Recipient’s name"
        placeholder="Please type recipient’s name"
        onChanged={(value) => onChanged({ ...organization, name: value })}
      />
      <InputField
        label="Address line 1"
        placeholder="Please type your address"
        onChanged={(value) => onChanged({ ...organization, country: value })}
        required
      />
      <InputField
        label="Address line 2"
        placeholder="Please type your address"
        onChanged={(value) => onChanged({ ...organization, country: value })}
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
        label="Country"
        placeholder="Select your country"
        onChanged={(value) => onChanged({ ...organization, address: value })}
        required
      />
      <InputField
        label="Email"
        placeholder="Enter your email address"
        onChanged={(value) => onChanged({ ...organization, email: value })}
        required
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
