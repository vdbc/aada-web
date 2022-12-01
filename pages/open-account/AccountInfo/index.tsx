import { useState } from "react";
import { UserModel } from "../../../models/UserModel";
import { ValueChanged } from "../../../utils/interface";
import InputField from "../InputField";
import styles from "./styles.module.scss";

declare type Props = {
  onUserUpdated: ValueChanged<UserModel>;
  user: UserModel;
};

export default function _View({ user, onUserUpdated }: Props) {
  const [email, setEmail] = useState<string>();
  const [reEmail, setReEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [rePassword, setRePassword] = useState<string>();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Account</h2>
      <InputField
        label="First name"
        placeholder="Please type your first name here"
        onChange={(value) => onUserUpdated({ ...user, firstName: value })}
        required
      />
      <InputField
        label="Last name"
        placeholder="Please type your last name here"
        onChange={(value) => onUserUpdated({ ...user, lastName: value })}
        required
      />
      <InputField
        label="Email"
        placeholder="Please type your email address here"
        onChange={(value) => {
          setEmail(value);
          if (value == reEmail) onUserUpdated({ ...user, email: value });
          else onUserUpdated({ ...user, email: "" });
        }}
        required
      />
      <InputField
        label="Email Confirmation"
        placeholder="Please type your email address here"
        onChange={(value) => {
          setReEmail(value);
          if (value == email) onUserUpdated({ ...user, email: value });
          else onUserUpdated({ ...user, email: "" });
        }}
        required
      />
      <InputField
        label="Password"
        placeholder="Please type your password here"
        onChange={(value) => {
          setPassword(value);
          if (value == rePassword) onUserUpdated({ ...user, password: value });
          else onUserUpdated({ ...user, password: "" });
        }}
        required
        secure
      />
      <InputField
        label="Password Confirmation"
        placeholder="Please type your password here"
        onChange={(value) => {
          setRePassword(value);
          if (value == password) onUserUpdated({ ...user, password: value });
          else onUserUpdated({ ...user, password: "" });
        }}
        required
        secure
      />
    </div>
  );
}
