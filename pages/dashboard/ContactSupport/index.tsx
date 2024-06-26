import Link from "next/link";
import { MdMailOutline, MdOutlinePhoneIphone } from "react-icons/md";
import { SiMessenger, SiViber, SiWhatsapp } from "react-icons/si";
import styles from "./styles.module.scss";

function ChatWithUs() {
  return (
    <div className={styles.chatWithUseContainer}>
      <div className={styles.label}>Or chat with us at</div>
      <div className={styles.socials}>
        <Link
          href="https://facebook.com/AsiaArchitectureDesignAwards"
          target="_blank"
        >
          <div className={styles.iconWrapper}>
            <SiMessenger size={20} />
          </div>
        </Link>
      </div>
      {/* <div className={styles.iconWrapper}>
        <SiViber size={20} />
      </div>
      <div className={styles.iconWrapper}>
        <SiWhatsapp size={20} />
      </div> */}
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <h2>NEED HELP?</h2>
      <div className={styles.contactInfo}>
        <div className={styles.title}>Contact our support center</div>
        <Link className={styles.field} href={`mailto:submit@aadawards.com`}>
          <MdMailOutline size={25} />
          <div>submit@aadawards.com</div>
        </Link>
        <Link className={styles.field} href={`tel:+65.8805.7032`}>
          <MdOutlinePhoneIphone size={25} />
          <div>+65 8805 7032</div>
        </Link>
      </div>
      <ChatWithUs />
    </div>
  );
}
