import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";

function GroupContact() {
  return (
    <div className={styles.groupContacts}>
      <div className={styles.wrapper}>
        <div className={styles.socials}>
          <Link href="#">
            <div className={styles.icon}>
              <ImFacebook size={20} />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.icon}>
              <BsInstagram size={20} />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.icon}>
              <FaLinkedinIn size={20} />
            </div>
          </Link>
          <Link href="#">
            <div className={styles.icon}>
              <BsYoutube size={20} />
            </div>
          </Link>
        </div>
        <div className={styles.groupMail}>
          <div className={styles.label}>Subscribe to our Newsletter</div>
          <div className={styles.inputEmail}>
            <input className={styles.input} placeholder="Enter Your Email" />
            <button className={styles.icon}>
              <MdArrowForward size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterMenu() {
  return (
    <div className={styles.footerMenu}>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          <Image
            className={styles.logo}
            src="/logo_white.svg"
            alt="Logo"
            width={275}
            height={90}
          />
          <div className={styles.companyInfo}>
            ASIA AWARDS ORGANIZATION PTE. LTD.
            <br />
            <br />
            470 North Bridge Road, #05-12 Bugis Cube, Singapore (188735)
          </div>
        </div>
        <div className={styles.column}>
          <h3>General Information</h3>
          <div className={styles.item}>
            <Link href="#">About</Link>
          </div>
          <div className={styles.item}>
            <Link href="#">Get Involved</Link>
          </div>
          <div className={styles.item}>
            <Link href="#">Terms & Conditions</Link>
          </div>
          <div className={styles.item}>
            <Link href="#">FAQs</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Contact</h3>
          <Link href="mailto:hello@aadawards.com">hello@aadawards.com</Link>
        </div>
      </div>
    </div>
  );
}

function Copyright() {
  return (
    <div className={styles.copyright}>
      © 2023 - All rights reserved - Asia Awards Organization.
    </div>
  );
}

export default function _View() {
  return (
    <footer className={styles.footer}>
      <GroupContact />
      <FooterMenu />
      <Copyright />
    </footer>
  );
}
