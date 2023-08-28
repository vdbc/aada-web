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
          {data.map((item, i) => {
            return (
              <Fragment key={item.title}>
                <h3>{`${i + 1}. ${item.title}`}</h3>
                {item.desc && <p className={styles.desc}>{item.desc}</p>}
                {item.conditions && (
                  <div className={styles.conditions}>
                    {item.conditions.map((value, j) => (
                      <div className={styles.conditionItem} key={value}>
                        <div className={styles.index}>{`(${i + 1}.${
                          j + 1
                        })`}</div>
                        <div className={styles.conditionContent}>{value}</div>
                      </div>
                    ))}
                  </div>
                )}
                {item.columns && (
                  <div className={styles.columns}>
                    {item.columns.map((column) => (
                      <div className={styles.column} key={column.header}>
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
      </main>
      <footer className={styles.footer}>
        <RegistrationFooterBanner className={styles.footerBanner} />
        <Footer />
      </footer>
    </div>
  );
}
