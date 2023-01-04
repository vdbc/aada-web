import Head from "next/head";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { FAQsTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FAQs</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <FAQsTopBanner />
        <div className={styles.content}>
          <ol>
            <h1>REGISTRATION</h1>
            <li>
              <b>
                Do I need to submit only executed projects or can there be any
                projects at conceptual stage?
              </b>
              <div>
                No. All projects are eligible to be nominated. Half-built or
                conceptual projects are qualified unless they meet the mentioned
                criteria.
              </div>
            </li>
            <li>
              <b>Are the awards open for all?</b>
              <div>
                Yes. The awards are open for all submissions, from independent
                professionals to architecture design firms.
              </div>
            </li>
            <li>
              <b>Can I enter one project into multiple categories?</b>
              <div>
                Yes. One project can be submitted to as many categories as you
                see it, hence it increases your chance of winning an award.
                Additional fee applies for different award categories you enter.
              </div>
            </li>
            <li>
              <b>Can I submit multiple entries at one time?</b>
              <div>
                Yes. Multiple entries are encouraged for any firms that conduct
                multi-disciplinary projects.
              </div>
            </li>
            <li>
              <b>Can I enter one project in multiple award categories?</b>
              <div>
                Yes. One project can enter more than one award category, based
                on the qualified criteria that are mentioned on each award
                category. However, there is an additional fee for each
                additional category you enter.
              </div>
            </li>
            <li>
              <b>Is there any limit to the number of entries I can submit?</b>
              <div>
                No. You can submit as many categories as you see fit to your
                project.
              </div>
            </li>
            <li>
              <b>
                Can I submit an award-winning project from other competitions?
              </b>
              <div>
                Yes. AADA welcomes previous award-winning projects to enter the
                shortlist of 2023 AADA.
              </div>
            </li>
            <li>
              <b>How will I know whether my submission is completed or not?</b>
              <div>
                You can access your admin dashboard to check the progress/
                status of your entry submission. A clear guideline and overview
                of submission for each entered category is demonstrated with
                percentage of completion for you to review, edit and submit.
              </div>
            </li>
            <li>
              <b>How will I know whether AADA receives my submission or not?</b>
              <div>
                Upon completing your submission, you will receive a confirmation
                email from AADA within 3-5 days to acknowledge your submission
                and payment of fees.
              </div>
            </li>
            <h1>PAYMENT OF FEES</h1>
            <li>
              <b>Are there any fees for registration?</b>
              <div>
                Entry fee applies for each nomination to selected award
                category.
                <br />
                Early entry fee until 31 December 2022: USD 180 per entry
                <br />
                Standard entry fee until 15 February 2023: USD 200 per entry
              </div>
            </li>
            <li>
              <b>What are payment options for the submission fee?</b>
              <div>
                Paypal: You are directed to a third-party payment gateway to
                complete your payment of fees. Upon confirming your payment, you
                are granted to your AADA official account to complete the award
                registration form for each project enrolled.
                <br />
                Bank transfer: An alternative method of payment enables you to
                complete your payment of fees via wire transfer to Asia Awards
                Organization authorized bank account. Within 24 hours upon
                receipt of payment, you are granted to your AADA official
                account to complete the award registration form for each project
                enrolled.
              </div>
            </li>
            <li>
              <b>
                Can I make changes to my entry category after processing
                payment?
              </b>
              <div>
                No. You can only make changes to project description upon
                finishing payment of fees. The entered category cannot be
                adjusted.
              </div>
            </li>
            <li>
              <b>Can I cancel my payment and get a refund?</b>
              <div>
                You can withdraw your entry within 48 hours after registration
                is confirmed. Please email to hello@aadawards.com for refund
                assistance and please be noted that a deductible processing fee
                is applied.
              </div>
            </li>
            <li>
              <b>Are all fees in USD?</b>
              <div>Yes. All fees are in USD.</div>
            </li>
            <h1>PROJECT QUALIFICATION</h1>
            <li>
              <b>Who is the Judge?</b>
              <div>
                A selected panel of judges consists of 20 members from 5
                countries with expertise in architecture design professionals,
                academic professors and social initiators.
                <br />A board of judges will be announced upon the deadline of
                registration process.
              </div>
            </li>
            <li>
              <b>Can I receive a scoring board from judges?</b>
              <div>
                Yes. Individual feedback and scoring board are provided with an
                additional fee of USD 500 per entry.
              </div>
            </li>
            <h1>AWARDS</h1>
            <li>
              <b>
                What do I get if I am qualified to be the winner of 2023 AADA?
              </b>
              <div>
                Each winner is awarded with a 2023 AADA’s Winners’ Kit, which
                includes:
                <br />
                An AADA trophy
                <br />
                An AADA Winner certificate
                <br />
                A 2023 AADA Hall of Fame yearbook.
                <br />
                All digital assets to be used on the winner’s online platform:
                Badge, certificate, Hall of Fame yearbook.
              </div>
            </li>
            <li>
              <b>How are the winners announced?</b>
              <div>
                All winners are going to be announced upon the completion of
                judging process in late May 2023. Winners will be announced
                online in AADA website and across social media platforms and
                also media partners channels.
              </div>
            </li>
            <li>
              <b>Who is eligible to attend 2023 AADA Winners’ Night?</b>
              <div>
                All winners are eligible to attend 2023 AADA Winners’ Night.
                Each category winner receives an invitation to partake in the
                Winners’ Night in Singapore.
              </div>
            </li>
          </ol>
        </div>
        <RegistrationFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
