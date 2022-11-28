import Head from "next/head";
import Image from "next/image";
import {
  MdArrowForward,
  MdArrowForwardIos,
  MdArrowRight,
} from "react-icons/md";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { DefaultTopBanner } from "../../components/OldTopBanner";
import AccountInfo from "./AccountInfo";
import HeaderPage from "./HeaderPage";
import OrganizationInfo from "./OrganizationInfo";
import styles from "./styles.module.scss";

export default function _View() {
  return (
    <div className={styles.container}>
      <Header />
      <HeaderPage activeTab={0} />
      <div className={styles.bodyForm}>
        <AccountInfo />
        <OrganizationInfo />
        <div className={styles.footerPage}>
          <div className={styles.term}>
            By proceeding, you agree to ASIA ARCHITECTURE DESIGN AWARD{" "}
            <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a> and
            agree to receive newsletters from Asia Architecture Design Awards.
          </div>
          <button>
            <span>Next</span>
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
}
