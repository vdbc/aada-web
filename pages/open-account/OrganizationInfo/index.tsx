import InputField from "../InputField";
import styles from "./styles.module.scss";

export default function _View() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Account</h2>
      <InputField
        label="Organization name"
        placeholder="Please type your organization name here"
        required
      />
      <InputField label="Country" placeholder="Select your Country" required />
      <div className={styles.wrapperRow}>
        <div>
          <InputField label="City" placeholder="Type your city" required />
        </div>
        <div>
          <InputField
            label="ZIP / Postal Code"
            placeholder="Your ZIP code"
            required
          />
        </div>
      </div>
      <InputField
        label="Address"
        placeholder="Please type your address"
        required
      />
      <InputField
        label="Email address"
        placeholder="Please type your organization email address"
        required
      />
      <InputField
        label="Facebook URL"
        placeholder="Please type your Facebook URL"
        required
      />
      <InputField
        label="Website URL"
        placeholder="Please type your Website URL"
        required
      />
    </div>
  );
}
