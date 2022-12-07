import InputField from "../../../components/InputField";
import { Organization } from "../../../models/Organization";
import { ValueChanged } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type Props = {
  organization: Organization;
  onChanged: ValueChanged<Organization>;
};

export default function _View({ organization, onChanged }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Account</h2>
      <InputField
        label="Organization name"
        placeholder="Please type your organization name here"
        onChange={(value) => onChanged({ ...organization, name: value })}
        required
      />
      <InputField
        label="Country"
        placeholder="Select your Country"
        onChange={(value) => onChanged({ ...organization, country: value })}
        required
      />
      <div className={styles.wrapperRow}>
        <div>
          <InputField
            label="City"
            placeholder="Type your city"
            onChange={(value) => onChanged({ ...organization, city: value })}
            required
          />
        </div>
        <div>
          <InputField
            label="ZIP / Postal Code"
            placeholder="Your ZIP code"
            onChange={(value) => onChanged({ ...organization, zipCode: value })}
            required
          />
        </div>
      </div>
      <InputField
        label="Address"
        placeholder="Please type your address"
        onChange={(value) => onChanged({ ...organization, address: value })}
        required
      />
      <InputField
        label="Email address"
        placeholder="Please type your organization email address"
        onChange={(value) => onChanged({ ...organization, email: value })}
        required
      />
      <InputField
        label="Facebook URL"
        placeholder="Please type your Facebook URL"
        onChange={(value) => onChanged({ ...organization, facebookUrl: value })}
        required
      />
      <InputField
        label="Website URL"
        placeholder="Please type your Website URL"
        onChange={(value) => onChanged({ ...organization, website: value })}
        required
      />
    </div>
  );
}
