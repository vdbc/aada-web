import { MdMailOutline, MdOutlinePhoneIphone } from "react-icons/md";
import { SiMessenger, SiViber, SiWhatsapp } from "react-icons/si";
import styles from "./styles.module.scss";

function ChatWithUs() {
  return (
    <div className={styles.chatWithUseContainer}>
      <div className={styles.label}>Or chat with us at</div>
      <div className={styles.iconWrapper}>
        <a href="https://facebook.com/AsiaArchitectureDesignAwards">
        <SiMessenger size={20} />
        </a>
      </div>
      <div className={styles.hidden}>
        <SiViber size={20} />
      </div>
      <div className={styles.hidden}>
        <SiWhatsapp size={20} />
      </div>
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <h2>NEED HELP?</h2>
      <div className={styles.contactInfo}>
        <div className={styles.title}>Contact our support center</div>
        <div className={styles.field}>
          <MdMailOutline size={25} />
          <div>submit@aadawards.com</div>
        </div>
        <div className={styles.field}>
          <MdOutlinePhoneIphone size={25} />
          <div>+65 729 1237</div>
        </div>
      </div>
      <ChatWithUs />
    </div>
  );
}
