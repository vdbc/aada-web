import InputField from "../InputField";
import styles from "./styles.module.scss";

export default function _View() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Account</h2>
      <InputField
        label="First name"
        placeholder="Please type your first name here"
        required
      />
      <InputField
        label="Last name"
        placeholder="Please type your last name here"
        required
      />
      <InputField
        label="Email"
        placeholder="Please type your email address here"
        required
      />
      <InputField
        label="Email Confirmation"
        placeholder="Please type your email address here"
        required
      />
      <InputField
        label="Password"
        placeholder="Please type your password here"
        required
      />
      <InputField
        label="Password Confirmation"
        placeholder="Please type your password here"
        required
      />
    </div>
  );
}
