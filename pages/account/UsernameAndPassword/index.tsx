import { useState } from "react";
import InputField from "../../../components/InputField";
import { requestUpdatePassword } from "../../../services/UserService";
import { store, useAppSelector } from "../../../store";
import { selectToken, selectUserEmail } from "../../../store/modules/user";
import styles from "./styles.module.scss";

export default function _View() {
  const email = useAppSelector(selectUserEmail);

  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [reNewPassword, setReNewPassword] = useState<string>("");

  async function handleSubmit() {
    if (newPassword != reNewPassword) {
      alert("password does not match");
      return;
    }

    requestUpdatePassword(
      currentPassword,
      newPassword,
      selectToken(store.getState())
    )
      .then(() => {
        alert("Change password successfully");
        setCurrentPassword("");
        setNewPassword("");
        setReNewPassword("");
      })
      .catch((err) => {
        const message = err?.message ?? "";
        if (message) alert(message);
      });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Username & Password</h2>
      <InputField
        label="Email Address"
        placeholder="Email Address"
        value={email}
        onChanged={(value) => {}}
        disable
      />
      <div style={{ height: 12 }} />
      <h2 className={styles.title}>Change your password</h2>
      <InputField
        label="Your current password"
        placeholder="Enter your current password"
        value={currentPassword}
        onChanged={setCurrentPassword}
        secure
        required
      />
      <InputField
        label="Type a new password"
        placeholder="Enter your new passowrd"
        value={newPassword}
        onChanged={setNewPassword}
        secure
        required
      />
      <InputField
        label="Confirm your new password"
        placeholder="Re-enter your new passowrd"
        value={reNewPassword}
        onChanged={setReNewPassword}
        secure
        required
      />
      <div className={styles.actions}>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}
