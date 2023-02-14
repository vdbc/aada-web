import Head from "next/head";
import Footer from "../../components/Footer";
import { RegistrationFooterBanner } from "../../components/FooterBanner";
import Header from "../../components/Header";
import { TermsTopBanner } from "../../components/TopBanner";
import styles from "./styles.module.scss";

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
          <ol>
            <h1>1. GENERAL TERMS</h1>
            <p>
              The Asia Architecture Design Awards (AADA 2023) is an annual,
              prestigious award organized by the Asia Awards Organization (AAO).
              There are 30 award categories in 6 disciplines: Architecture
              Design; Interior Design; Furniture Design; Firms for Architecture
              Design; Firms for Interior Design; Firms in Furniture;
              Manufacturing and Retailing.
              <br />
              Submissions to the Asia Architecture & Design Awards – AADA 2023
              are accepted through the award's official website:
              https://aadawards.com/.
            </p>
            <p>
              Upon nominating your project to the 2023 AADA and confirming the
              entry fees, the applicant consents to AADA's Terms and Conditions,
              and gives permission to receive correspondence and information
              related to AADA.
            </p>
          </ol>
          <ol>
            <h1>2. CONDITIONS FOR PARTICIPATION</h1>
            <li>
              Projects from any location in Asia are eligible to submit to the
              AADA. Applications are accepted whether the projects are complete
              or partially finished, regardless of their newness or antiquity.
            </li>
            <li>
              Projects that have won a prize in another contest are entitled to
              participate.
            </li>
            <li>
              Applicants can submit as many projects as they wish in an
              unlimited number of entries. Each category, however, requires an
              additional fee to be paid.
            </li>
            <li>
              For registration, each project must include a publicly disclosed
              name of the individual, architectural firm, or business that owns
              or designed it. Submitted works must have prior authorization from
              their original owner or creator.
            </li>
            <li>
              AADA retains the right to eliminate any duplicate project that is
              submitted by multiple designers, architects, or firms.
            </li>
            <li>
              AADA reserves the right to participate if the information provided
              is imprecise or the jury has concerns about the transparency and
              accuracy of the submission.
            </li>
            <li>
              Applicants can review their submissions by logging in to the AADA
              website https://aadawards.com/. All applications must be submitted
              in English; submissions written in any other language will be
              immediately disqualified.
            </li>
          </ol>
          <ol>
            <h1>3. REQUEST</h1>
            <li>
              The submission must take place before 11:59 PM Singapore time on
              April 30, 2023; failure to comply with this deadline will result
              in the ineligibility of applications.
            </li>
            <li>
              All submissions must be nominated through the form on the website:
              https://aadawards.com/. The form requires applicants to provide
              their name, address, email, and phone number. Account holders have
              the capability to modify this information at any time.
            </li>
            <li>Unless fees are settled, applications will not be accepted.</li>
            <li>
              After completion of the submission process, the applicant is not
              able to make any further changes.
            </li>
          </ol>
          <ol>
            <h1>4. PHOTO</h1>
            <li>
              Entries are evaluated solely on the content that is presented.
              Applicants are required to submit 10 photographs as part of their
              application, including images of the project or unit and technical
              drawings (where applicable). For photos to be considered, they
              must be genuine and of superior quality. Digital manipulation of
              images that drastically alter the texture of the project is not
              accepted. Each photograph must not exceed 5MB and be in one of the
              following formats: PNG, JPG, or JPEG.
            </li>
            <li>
              Hand-drawn sketches and conceptual designs are both permissible
              for project submission. Accompanying the images must be clearly
              stated captions. If the quality of the image is substandard or
              insufficient to evaluate the project, AADA does not have an
              obligation to rectify or adjust it.
            </li>
            <li>
              The applicants are obligated to take full responsibility for all
              copyright and related rights issues associated with the project,
              and provide AADA indemnification in case of any potential legal
              disputes (if any dispute arises).
            </li>
          </ol>
          <ol>
            <h1>5. REGISTRATION FEES</h1>
            <li>
              The registration fee is determined by the submission date set
              according to the time of registration indicated on the AADA
              website.
              <br />
              Registration fee is 180 USD per nomination (paid before February
              28, 2022) and 200 USD per nomination (paid from March 1, 2023 -
              April 30, 2023). The registration fee is converted from local
              currency to USD.
            </li>
            <li>
              The participation fee will be paid via wire transfer to the AADA
              official bank account or via a third-party payment gateway on the
              AADA website
              <a href="https://aadawards.com" target="_blank">
                https://aadawards.com/
              </a>
              .
            </li>
            <li>
              Payment invoices will be sent to the registered billing address
              within 14 days from the date of payment.
            </li>
          </ol>
          <ol>
            <h1>6. REFUND</h1>
            <li>
              Submitted projects can be withdrawn from AADA at any stage;
              however, the registration fees are non-refundable.
            </li>
          </ol>
          <ol>
            <h1>7. REGISTRATION TIMELINE</h1>
            <table>
              <tr>
                <th>Official Open for Registration</th>
                <th>Early Entry Deadlines</th>
                <th>Standard Entry Deadlines</th>
              </tr>
              <tr>
                <td>1 December 2022</td>
                <td>28 February 2023</td>
                <td>30 April 2023</td>
              </tr>
            </table>
          </ol>
          <ol>
            <h1>8. EVALUATION PROCEDURE</h1>
            <li>
              After completing the submission, the applicant receives a
              confirmation email from AADA within 3–5 business days.
            </li>
            <li>
              There are 20 judges from 5 countries who are experts, professors,
              and influencers in the fields of architecture, and interior
              design. Information about the jury members is published on the
              awards website after registration ends.
            </li>
            <li>
              AADA ensures fairness and transparency in the judging process. The
              decision of the jury is final. AADA does not accept and is not
              responsible for resolving any appeals against the jury's decision.
            </li>
            <li>
              The winner for each category is the project with the highest
              score, determined by the judging panel based on the specified
              criteria. Each project is evaluated separately based on the
              category in which it is registered.
            </li>
          </ol>
          <ol>
            <h1>9. WINNER ANNOUNCEMENT</h1>
            <li>
              Projects that have been shortlisted will be notified via email.
              Applicants who are not shortlisted will not receive any emails
              from AADA.
            </li>
            <li>
              The winners of the AADA 2023 Awards are revealed on the website
              https://aadawards.com/ on June 2023 and are invited to attend the
              2023 AADA Winners’ Night in Singapore in July 2023.
            </li>
            <li>
              All applicants who wish to receive transcripts and comments from
              the jury have to pay an additional 500 USD.
            </li>
            <li>
              The process of announcing nominations and winners is entirely
              determined by AADA. Applicants must accept that awards may not be
              announced or awarded in the same way.
            </li>
          </ol>
          <ol>
            <h1>10. PRIVACY POLICY</h1>
            <li>
              AADA does not store any debit, credit card, or other
              financial-related information.
            </li>
            <li>
              The personal information provided by the applicants will not be
              shared with any third parties. Only AADA staff and the jury have
              access to this information for marketing purposes.
            </li>
            <li>
              Applicants must ensure that the personal information provided to
              AADA is accurate, unmodified, and does not violate local laws.
              AADA reserves the right to claim compensation for any expenses
              incurred as a result of the applicant providing false information.
            </li>
          </ol>
          <ol>
            <h1>11. COPYRIGHTS</h1>
            <li>
              Copyright and other rights remain with the designer, architect,
              and business.
            </li>
            <li>
              AADA reserves the right to use the information submitted by
              applicants for non-commercial purposes, which includes: unlimited
              use of AADA publications, media channels (print and digital), and
              AADA media partners. AADA will fully credit the source of the
              information.
            </li>
            <li>
              By nominating your project, you have granted AADA permission to
              use the submitted photos for marketing purposes in any event, such
              as exhibition, print and digital.
            </li>
            <li>
              AADA 2023 winner information and images are used for marketing and
              advertising campaigns related to the Asian Architecture Awards
              (AADA) and the Asia Awards Organization (AAO).
            </li>
            <li>
              After the submission is finished, it is the responsibility of
              applicants to make sure that they are aware of and fulfilling all
              legal rights and obligations connected with any data or images
              presented to AADA. Furthermore, AADA holds the right to seek
              recompense for any costs caused by the applicant giving false
              information.
            </li>
          </ol>
          <ol>
            <h1>12. LEGAL RESPONSIBILITIES</h1>
            <li>
              Should AADA become aware of any alleged copyright infringements,
              we reserve the right to delete the relevant data and visuals, or
              cancel the corresponding award without the approval of the owners.
            </li>
            <li>
              AADA is not responsible for any unfavorable effects (diminished
              profits, harmed credibility, impaired business, destruction or
              deterioration of data or information) which may result from the
              provision of the aforementioned information to AADA.
            </li>
            <li>
              At any given time, AADA reserves the right to uphold its
              obligations as prescribed by these terms. To legally and validly
              do so, all applicants must obtain AADA's written consent prior to
              exercising their rights and responsibilities stated in these
              terms. AADA is not liable for failure to meet its obligations
              under these terms in case any circumstances arise without notice.
            </li>
          </ol>
          <ol>
            <h1>13. DATA STORAGE</h1>
            <li>
              By providing the information found on https://aadawards.com/, the
              applicant acknowledges that AADA has permission to store documents
              relating to projects, businesses, and organizations in its
              database. This information is strictly restricted to only the AADA
              staff and the judging panel.
            </li>
          </ol>
        </div>
        <RegistrationFooterBanner />
      </main>
      <Footer />
    </div>
  );
}
