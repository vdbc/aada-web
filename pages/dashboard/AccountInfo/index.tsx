import Link from "next/link";
import {
  MdMailOutline,
  MdOutlineLocationOn,
  MdPersonOutline,
} from "react-icons/md";
import { useAppSelector } from "../../../store";
import { selectUser } from "../../../store/modules/user";
import styles from "./styles.module.scss";

export default function _View() {
  const user = useAppSelector(selectUser);
  return (
    <div className={styles.container}>
      <h2>Account</h2>
      <div className={styles.username}>
        {user?.firstName + " " + user?.lastName}
      </div>
      <div className={styles.userInfoField}>
        <MdPersonOutline size={25} />
        <div>Vietnam Design & Build Center</div>
      </div>
      <div className={styles.userInfoField}>
        <MdMailOutline size={25} />
        <div>{user?.email}</div>
      </div>
      {user?.address && (
        <div className={styles.userInfoField}>
          <MdOutlineLocationOn size={25} />
          <div>{user?.address}</div>
        </div>
      )}
      <div className={styles.wrapperLink}>
        <Link className={styles.link} href="#">
          Change your information
        </Link>
      </div>
    </div>
  );
}
