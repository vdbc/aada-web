import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { TermsTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";
import data from "./terms.json";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Terms And Conditions</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <TermsTopBanner />
        <div className={styles.content}>
          {data.map((item, index) => {
            return (
              <Fragment>
                <h3>{`${index + 1}. ${item.title}`}</h3>
                {item.desc && <p className={styles.desc}>{item.desc}</p>}
                {item.conditions && (
                  <ol>
                    {item.conditions.map((value) => (
                      <li>{value}</li>
                    ))}
                  </ol>
                )}
                {item.columns && (
                  <div className={styles.columns}>
                    {item.columns.map((column) => (
                      <div className={styles.column}>
                        <div className={styles.headerColumn}>
                          {column.header}
                        </div>
                        <div className={styles.contentColumn}>
                          {column.content}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
        <RegistrationFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
