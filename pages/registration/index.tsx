/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import ContentCard from "../../components/ContentCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

export default function _View() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Registration</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <img className={styles.banner} alt="Banner" src="/home/banner.svg" />
        <ContentCard title={"\\\nA Brand\nIdentity Boost"}>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div></div>
          <h2>5-MINUTE SUBMISSION</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>INFORMATIVE PROCESS</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>INSTANT ENTRY SUPPORT</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>STANDARDIZED VERIFICATION</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>
        <img
          className={styles.registration_timeline}
          alt="Registration Timeline"
          src="/registration_timeline.svg"
        />
        <div className={styles.groupProcess}>
          <div
            className={styles.registration_process}
            >
          <img
            alt="Registration Process"
            src="/registration_process.svg"
          />
          </div>
          <div className={styles.content}>
            <ContentCard title={"\\\nRegistration\nProcess"}>
              <div className={styles.buttonProcess}>
                <span>
                CREATE YOUR AADA ACCOUNT
                </span>
              </div>
              <div>
                Fill the registration form for an official account on AADA website. You may have to provide required information of yourself and the participating business and non-mandatory fields for additional terms that you can choose whether to fill or not.
              </div>
              <br />
              <div className={styles.buttonProcess}>
                <span>
                SELECT YOUR NOMINATION CATEGORY
                </span>
              </div>
              <div>
              Choose the suitable discipline and category for your entry. The number of nomination is not limited. The categories change depening on chosen discipline.
              </div>
              <br />
              <div className={styles.buttonProcess}>
                <span>
                PAYMENT OF FEES
                </span>
              </div>
              <div>
              All fees are charged per entry to 2023 AADA. Upon finishing your submission categories selection, you are directed to a payment gateway that allows payment in Paypal. The invoice of Entry fee will be sent in email to acknowledge your successful payment.
              </div>
              <br />
              <div className={styles.buttonProcess}>
                <span>
                SUBMIT YOUR ENTRY DOCUMENTS
                </span>
              </div>
              <div>
              The 2023 AADA evaluation process is a jury-based scoring procedure, hence you are required to provide detailed description of your project and business. The documents needed to complete your nomination include a Project Statement, Details and at least 10 pictures (or video, if possible).
              </div>
            </ContentCard>
          </div>
        </div>
        <ContentCard title={"\\\nEntry Fee"}>
          <h2>AADA SPECIAL OFFERS</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div className={styles.images}>
            <div className={styles.oneImage}>
              <Image src="/early_bird.png" alt="Square" fill />
            </div>
            <div className={styles.oneImage}>
              <Image src="/early_bird.png" alt="Square" fill />
            </div>
          </div>
        </ContentCard>
        <ContentCard title={"\\\nRegistration\nTips"}>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <div></div>
          <h2>VALIDATED DOCUMENTS</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>PROJECT GALLERY</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>ENGLISH WRITTEN</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
          <h2>PROJECT CREDIT</h2>
          <div>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delectus delicata usu. Vidit
            dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum
            an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit
            munere facilis accusam eu dicat falli consulatu at vis.
          </div>
        </ContentCard>

        <img
          className={styles.why}
          alt="Ready to submit your work?"
          src="ready_to_submit_your_work.svg"
        />
      </main>
      <Footer />
    </div>
  );
}
