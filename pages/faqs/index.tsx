import Head from "next/head";
import { Fragment } from "react";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { FAQsTopBanner } from "../../components/TopBanner";
import faqData from "./faqs.json";
import styles from "./styles.module.scss";

export default function Home() {
  const faqs = faqData;
  faqs[0].offset = 0;
  for (let i = 1; i < faqs.length; i++) {
    const before = faqs[i - 1];
    faqs[i].offset = (before.offset ?? 0) + before.faqs.length;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>FAQs</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <FAQsTopBanner />
        <div className={styles.content}>
          {faqs.map(({ title, faqs, offset }) => (
            <Fragment key={title}>
              <h3>{title}</h3>
              {faqs.map(({ question, answer }, index) => (
                <div className={styles.faqItem} key={question}>
                  <div className={styles.index}>{`(${
                    (offset ?? 0) + index + 1
                  })`}</div>
                  <div className={styles.faq}>
                    <div className={styles.question}>{question}</div>
                    <div className={styles.answer}>{answer}</div>
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
        <RegistrationFooterBanner className={styles.footerBanner} />
        <Footer />
      </footer>
    </div>
  );
}
