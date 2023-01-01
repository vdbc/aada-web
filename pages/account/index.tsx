import { flatMap } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LeftMenu, { leftMenus, menuDetails } from "./LeftMenu";
import styles from "./styles.module.scss";

export default function _View(props: any) {
  const route = useRouter();
  const paramMenuId = route.query["menu"]?.toString() ?? "";
  const menuIds = flatMap(leftMenus, (item) => item.items).map(
    (item) => item.id
  );
  const activeId = menuIds.includes(paramMenuId) ? paramMenuId : menuIds[0];

  const [selectedId, setSelectedId] = useState(activeId);

  return (
    <div className={styles.container}>
      <Head>
        <title>Account</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <div className={styles.bodyPage}>
          <div className={styles.detail}>
            <div className={styles.leftMenu}>
              <LeftMenu selectedId={selectedId} onChanged={setSelectedId} />
            </div>
            <div className={styles.inputDetail}>
              {menuDetails[selectedId]?.component}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
