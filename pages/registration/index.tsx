/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { RegistrationTopBanner } from "../../components/TopBanner";
import RegistrationProcess from "./RegistrationProcess";
import RegistrationTimeline from "./RegistrationTimeline";
import styles from "./styles.module.scss";

const separator = (
  <div className={styles.separator}>
    <div className={styles.line} />
  </div>
);

declare type OfferCardProps = {
  children: any;
};

function OfferCard({ children }: OfferCardProps) {
  return (
    <div className={styles.offerCardContainer}>
      <div className={styles.logo}>
        <div>
          <Image src="/favicon.svg" alt="Logo" fill />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Registration</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <RegistrationTopBanner />
        <ContentCard title={"\\\nA Brand\nIdentity Boost"}>
          <div>
            In recent times, professionals from the fields of architecture and design have established a significant influence, particularly in emerging markets across Asia, including both the Middle Eastern and Northern Asian areas.
          </div>
          <div>
            Participating in an award competition serves to enhance a brand’s visibility, while careful preparation is essential for achieving success. This is because the evaluation criteria for each award category remain rooted in timeless principles that ultimately lead to improved business outcomes.
          </div>
          <br />
          <h2>A QUICK 5-MINUTE SUBMISSION</h2>
          <div>
            Submitting an entry online can be accomplished in under 5 minutes, provided that you have thoroughly reviewed the submission guidelines for the 2024 Asia Architecture Design Awards beforehand.
          </div>
          <h2>INFORMATIVE GUIDED PROCESS</h2>
          <div>
            The entry registration process includes guidelines at each step, outlining the necessary preparations and required information. Additionally, you have the flexibility to revisit and finalize your entry by using your admin dashboard even after initial submission progress.
          </div>
          <h2>INSTANT ENTRY SUPPORT</h2>
          <div>
            AADA offers instant registration assistance to individuals facing any difficulties while navigating through the submission process. This ensures that participants receive timely help and guidance if they encounter any obstacles during the progression of their entry submission.
          </div>
          <h2>STANDARDIZED VERIFICATION</h2>
          <div>
            To participate in the 2024 Asia Architecture Design Awards, it’s essential to submit evidence of your work to establish eligibility for project nomination. The Asia Awards Organization is tasked with the responsibility of verifying both your business credentials and the project details to ensure they align with the submission criteria. This verification process is crucial in determining the eligibility of your entry.
          </div>
        </ContentCard>
        <RegistrationTimeline />
        <div className={styles.groupProcess}>
          <div className={styles.registration_process}>
            <img alt="Registration Process" src="/registration_process.svg" />
          </div>
          <div className={styles.content}>
            <ContentCard title={"\\\nRegistration\nProcess"}>
              <RegistrationProcess />
            </ContentCard>
          </div>
        </div>
        <ContentCard title={"\\\nEntry Fee"}>
          <h2>AADA SPECIAL OFFERS</h2>
          <br />
          <div>
            Maximize your opportunity with the Early Entry Discount by submitting your work before November 30, 2023! Avail submission fees starting at a mere $180 per category during the Early Entry phase.
          </div>
          <div className={styles.offers}>
            <OfferCard>
              <h3>EARLY ENTRY</h3>
              <div>USD180 per entry</div>
            </OfferCard>
            <OfferCard>
              <h3>Standard</h3>
              <div>USD200 per entry</div>
            </OfferCard>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nRegistration\nTips"}>
          <div>
            Thoroughly preparing your entry submission enhances the likelihood of making the shortlist and clinching a prize. Here are some essential guidelines to follow as you collect the necessary information for each step of the registration process:
          </div>
          <div></div>
          <h2>CHOOSE THE RIGHT AWARD CATEGORY</h2>
          <div>
            Carefully assess each award category to determine how your project can excel. By selecting the most appropriate award category, you can make your project stand out from the competition and highlight its unique strengths.
          </div>
          <h2>VALIDATED DOCUMENTS</h2>
          <div>
            Submitting validated documents related to your projects is essential for the award application. These documents serve as concrete evidence and proof of your work for the panel of judges to review and evaluate.
          </div>
          <h2>CONTENT PREPARATION</h2>
          <div>
            Ensure that you create a clear roadmap for what should be included in each section of your submission. While crafting a compelling narrative is important, make certain that your submission directly addresses the crucial criteria. Use bullet points to emphasize key facts and highlight the essential features you want the judges to consider in the main part of your submission.
          </div>
          <h2>PROJECT CREDIT</h2>
          <div>
            Earning an award is an excellent internal recognition for all great contribution and teamwork efforts. The award is far more than a credit to business, it helps build internal credibility and strengthens business advantages and promotes talents for organization.
          </div>
        </ContentCard>

        <RegistrationFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
