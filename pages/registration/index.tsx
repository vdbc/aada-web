/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { RegistrationTopBanner } from "../../components/TopBanner";
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
            Industry players from architecture & design disciplines have made
            their strong presence in recent years, some notable emerging market
            economies in Asia includes ASEAN countries, undoubtedly both the
            middle eastern and northern Asian regions.
          </div>
          <div>
            Entering an award is to make a difference to the brand’s presence,
            yet plan for a success as judging criteria for each award category
            reflect the ageless principles that drive better business result.
          </div>
          <br />
          <h2>A QUICK 5-MINUTE SUBMISSION</h2>
          <div>
            It takes less than 5 minutes to complete an entry submission online
            as long as you have studied the 2023 AADA submission guidelines.
          </div>
          <h2>INFORMATIVE GUIDED PROCESS</h2>
          <div>
            Guidelines are provided within every step of entry registration,
            including what needs to be prepared, what kind of required
            information and you can come back to finish or update your entry
            following a submission progress in your admin dashboard.
          </div>
          <h2>INSTANT ENTRY SUPPORT</h2>
          <div>
            AADA supports instant registration assistance in case there is any
            difficulties during your submission progress.
          </div>
          <h2>STANDARDIZED VERIFICATION</h2>
          <div>
            By entering 2023 AADA, you have to submit proof of your work to be
            eligible to nominate a project. AADA is responsible for verifying
            your business and project and eligibility of your submission.
          </div>
        </ContentCard>
        <img
          className={styles.registration_timeline}
          alt="Registration Timeline"
          src="/registration_timeline.svg"
        />
        <div className={styles.groupProcess}>
          <div className={styles.registration_process}>
            <img alt="Registration Process" src="/registration_process.svg" />
          </div>
          <div className={styles.content}>
            <ContentCard
              title={"\\\nRegistration\nProcess"}
              separator={separator}
            >
              <div className={styles.buttonProcess}>
                <span>CREATE YOUR AADA ACCOUNT</span>
                <div className={styles.dot} />
              </div>
              <div>
                Fill the registration form for an official account on AADA
                website. You may have to provide required information of
                yourself and the participating business and non-mandatory fields
                for additional terms that you can choose whether to fill or not.
              </div>
              <br />
              <div className={styles.buttonProcess}>
                <span>SELECT YOUR NOMINATION CATEGORY</span>
                <div className={styles.dot} />
              </div>
              <div>
                Choose the suitable discipline and category for your entry. The
                number of nomination is not limited. The categories change
                depending on chosen discipline.
              </div>
              <br />
              <div className={styles.buttonProcess}>
                <span>PAYMENT OF FEES</span>
                <div className={styles.dot} />
              </div>
              <div>
                All fees are charge per entry by 2023 AADA. Upon completion of
                your submission, you will be directed to Paypal payment gateway.
                An e-invoice will be send to your email to acknowledge receipt
                your successful payment.
              </div>
              <br />
              <div className={styles.buttonProcess}>
                <span>SUBMIT YOUR ENTRY DOCUMENTS</span>
                <div className={styles.dot} />
              </div>
              <div>
                The 2023 AADA evaluation process is a judge-based scoring
                procedure, hence you are required to provide detailed
                description of your project and business. The documents needed
                to complete your nomination include a Project Statement, Details
                and at least 10 pictures (or video, if possible).
              </div>
            </ContentCard>
          </div>
        </div>
        <ContentCard title={"\\\nEntry Fee"}>
          <h2>AADA SPECIAL OFFERS</h2>
          <div>
            Take advantage of the Early Entry Discount to nominate your work
            before 31 December, 2022! The submission fees start at $180 per
            category during the Early Entry submission phase.
          </div>
          <div className={styles.offers}>
            <OfferCard>
              <h3>EARLY ENTRY</h3>
              <div>USD180 per entry</div>
            </OfferCard>
            <div style={{ width: 20 }} />
            <OfferCard>
              <h3>Standard</h3>
              <div>USD200 per entry</div>
            </OfferCard>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nRegistration\nTips"}>
          <div>
            Careful preparation for entry submission increases the chances of
            being shortlisted and winning a prize. Below are some Do’s for you
            upon gathering required information for all steps of registration.
          </div>
          <div></div>
          <h2>CHOOSE THE RIGHT AWARD CATEGORY</h2>
          <div>
            Consider how your project can stack up by studying each award
            category carefully. Only by selecting the right award category can
            your project be stand out of the crowd and profile your project’s
            strengths.
          </div>
          <h2>VALIDATED DOCUMENTS</h2>
          <div>
            The award submission requires validated documents relating to
            projects. It’s the evidence and proof of your work to panel of
            judges.
          </div>
          <h2>CONTENT PREPARATION</h2>
          <div>
            Make sure you clearly map out what needs to be presented in each
            section. Tell good story but make sure your submission address
            exactly what is important each criteria by bullet the killer facts,
            highlight the key features that you want judges to consider in the
            main part.
          </div>
          <h2>PROJECT CREDIT</h2>
          <div>
            Earning an award is an excellent internal recognition for all great
            contribution and teamwork efforts. The award is far more than a
            credit to business, it helps build internal credibility and
            strengthens business advantages and promotes talents for
            organization.
          </div>
        </ContentCard>

        <RegistrationFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
