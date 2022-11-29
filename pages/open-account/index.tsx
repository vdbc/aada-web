import { useState } from "react";
import Header from "../../components/Header";
import RegistrationForm from "./RegistrationForm";
import HeaderPage from "./HeaderPage";
import styles from "./styles.module.scss";

export default function _View() {
  const [tab, setTab] = useState(0);
  const contents = [<RegistrationForm onRegisterSuccess={() => setTab(1)} />];
  return (
    <div className={styles.container}>
      <Header />
      <HeaderPage activeTab={tab} />
      {contents[tab]}
    </div>
  );
}
