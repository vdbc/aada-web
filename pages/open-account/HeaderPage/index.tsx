import styles from "./styles.module.scss";

declare type ButtonTabProps = {
  title: string;
  isActive: boolean;
};

function ButtonTab({ title, isActive }: ButtonTabProps) {
  return (
    <button
      className={[
        styles.buttonTab,
        isActive ? styles.active : styles.inactive,
      ].join(" ")}
    >
      {title}
    </button>
  );
}

declare type HeaderPageProps = {
  activeTab: number;
  onTabChanged?: Function;
};

const tabs = [
  {
    title: "REGISTRATION",
  },
  {
    title: "NOMINATION",
  },
  {
    title: "PAYMENT OF FEES",
  },
];

export default function _View({ activeTab, onTabChanged }: HeaderPageProps) {
  return (
    <div className={styles.container}>
      <div>
        {tabs.map(({ title }, index) => (
          <ButtonTab title={title} isActive={index == activeTab} />
        ))}
      </div>
    </div>
  );
}
