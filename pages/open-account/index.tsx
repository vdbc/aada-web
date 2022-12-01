import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/Header";
import { useAppSelector } from "../../store";
import { selectIsLogged } from "../../store/modules/user";
import HeaderPage from "./HeaderPage";
import NominationForm from "./NominationForm";
import RegistrationForm from "./RegistrationForm";
import styles from "./styles.module.scss";

function _View() {
  const isLogged = useAppSelector(selectIsLogged);
  const router = useRouter();
  const [tab, setTab] = useState(isLogged ? 1 : 0);
  const contents = [
    <RegistrationForm key="registration" onRegisterSuccess={() => setTab(1)} />,
    <NominationForm
      key="nomination"
      onRegisterSuccess={() => router.push("/dashboard")}
    />,
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
