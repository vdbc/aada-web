import Link from "next/link";
import {
  MdMailOutline,
  MdOutlineLocationOn,
  MdPersonOutline,
} from "react-icons/md";
import { useAppSelector } from "../../../store";
import { selectOrganization, selectUser } from "../../../store/modules/user";
import styles from "./styles.module.scss";

export default function _View() {
  const user = useAppSelector(selectUser);
  const organization = useAppSelector(selectOrganization);
  return (
    <div className={styles.container}>
      <h2>Account</h2>
      <div className={styles.username}>
        {user?.firstName + " " + user?.lastName}
      </div>
      <div className={styles.userInfoField}>
        <MdPersonOutline size={25} />
        <div>{organization?.name}</div>
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
        <Link className={styles.link} href="/account">
          Change your information
        </Link>
      </div>
    </div>
  );
}
