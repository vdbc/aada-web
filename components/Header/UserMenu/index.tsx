import { useState } from "react";
import { useAppSelector } from "../../../store";
import { selectFirstName, selectLastName } from "../../../store/modules/user";
import { VoidCallback } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type UserMenuProps = {
  onLogout: VoidCallback;
};

export default function UserMenu({ onLogout }: UserMenuProps) {
  const [isActive, setActive] = useState(false);
  const lastName = useAppSelector(selectLastName);
  const firstName = useAppSelector(selectFirstName);



  return (
    <div className={styles.container}>
      <div className={isActive ? styles.active : styles.inactive}>
        <button className={styles.title} onClick={() => setActive(!isActive)}>
          Hello {firstName} {lastName}
        </button>
        {isActive && (
          <div className={styles.menus}>
            <button
              onClick={() => {
                setActive(false);
                onLogout();
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
