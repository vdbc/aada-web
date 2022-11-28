import { MdArrowForwardIos } from "react-icons/md";
import AccountInfo from "../AccountInfo";
import OrganizationInfo from "../OrganizationInfo";
import styles from "./styles.module.scss";

declare type RegistrationProps = {
  onRegisterSuccess: Function;
};

export default function _View({ onRegisterSuccess }: RegistrationProps) {
  return (
    <div className={styles.registration}>
      <AccountInfo />
      <OrganizationInfo />
      <div className={styles.footerPage}>
        <div className={styles.term}>
          By proceeding, you agree to ASIA ARCHITECTURE DESIGN AWARD{" "}
          <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a> and
          agree to receive newsletters from Asia Architecture Design Awards.
        </div>
        <button onClick={() => onRegisterSuccess()}>
          <span>Next</span>
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
}
