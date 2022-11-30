import { useState } from "react";
import Header from "../../components/Header";
import HeaderPage from "./HeaderPage";
import NominationForm from "./NominationForm";
import RegistrationForm from "./RegistrationForm";
import styles from "./styles.module.scss";

function _View() {
  const [tab, setTab] = useState(0);
  const contents = [
    <RegistrationForm onRegisterSuccess={() => setTab(1)} />,
    <NominationForm onRegisterSuccess={() => setTab(2)} />,
  ];
  return (
    <div className={styles.container}>
      <Header />
      <HeaderPage activeTab={tab} />
      {contents[tab]}
    </div>
  );
}

export default _View;
