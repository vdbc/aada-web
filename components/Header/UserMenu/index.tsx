import { useState } from "react";
import { useAppSelector } from "../../../store";
import { selectLastName } from "../../../store/modules/user";
import { VoidCallback } from "../../../utils/interface";
import styles from "./styles.module.scss";

declare type UserMenuProps = {
  onLogout: VoidCallback;
};

export default function UserMenu({ onLogout }: UserMenuProps) {
  const lastName = useAppSelector(selectLastName);

  const [isActive, setActive] = useState(false);

  return (
    <div className={styles.container}>
      <div className={isActive ? styles.active : styles.inactive}>
        <button className={styles.title} onClick={() => setActive(!isActive)}>
          Hello {lastName}
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
