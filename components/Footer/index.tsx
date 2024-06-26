import Image from "next/image";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { MdArrowForward } from "react-icons/md";
import styles from "./styles.module.scss";

function GroupContact() {
  return (
    <div className={styles.groupContacts}>
      <div className={styles.wrapper}>
        <div className={styles.socials}>
          <Link
            href="https://facebook.com/AsiaArchitectureDesignAwards"
            target="_blank"
          >
            <div className={styles.icon}>
              <ImFacebook size={20} />
            </div>
          </Link>
          <Link href="https://instagram.com/asiaawards.co" target="_blank">
            <div className={styles.icon}>
              <BsInstagram size={20} />
            </div>
          </Link>
          <Link href="https://linkedin.com/company/89923966" target="_blank">
            <div className={styles.icon}>
              <FaLinkedinIn size={20} />
            </div>
          </Link>
          {/* <Link href="#">
            <div className={styles.icon}>
              <BsYoutube size={20} />
            </div>
          </Link> */}
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

function CompanyInfo({ className }: { className: string }) {
  return (
    <div className={[styles.box, className].join(" ")}>
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
  );
}

function FooterMenu() {
  return (
    <div className={styles.footerMenu}>
      <div className={styles.wrapper}>
        <CompanyInfo className={styles.companyForHorizoltal} />
        <div className={styles.box}>
          <h3>General Information</h3>
          <div className={styles.item}>
            <Link href="/the-award">About</Link>
          </div>
          <div className={styles.item}>
            <Link href="/get-involved">Get Involved</Link>
          </div>
          <div className={styles.item}>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
          <div className={styles.item}>
            <Link href="/faqs">FAQs</Link>
          </div>
          <div className={styles.item}>
            <Link href="/documents/2023AADAGuideBook-EN.pdf" target="_blank">
              Submission Guidelines
            </Link>
          </div>
        </div>
        <div className={[styles.box, styles.contactForHorizoltal].join(" ")}>
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
      © 2023 - All rights reserved - Asia Awards Organization PTE. LTD.
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
