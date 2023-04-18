import Dialog from "@mui/material/Dialog";
import { get, keys } from "lodash";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { post } from "../../services/http";
import { ValueChanged } from "../../utils/interface";
import styles from "./styles.module.scss";

declare type InputFieldProps = {
  label: string;
  placeholder: string;
  onChanged: ValueChanged<string>;
};

function InputField({ label, placeholder, onChanged }: InputFieldProps) {
  return (
    <div className={styles.inputFieldContainer}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        onChange={(event) => onChanged(event.target.value)}
      />
    </div>
  );
}

declare type UserInfo = {
  ["First Name"]: string;
  ["Last Name"]: string;
  Email: string;
  ["Phone Number"]: string;
  Company: string;
  Title: string;
  ["Created At"]: string;
};
const userInfoEmpty = {
  "First Name": "",
  "Last Name": "",
  Email: "",
  ["Phone Number"]: "",
  Company: "",
  Title: "",
  "Created At": "",
};

function RegisterForm() {
  const [info, setInfo] = useState<UserInfo>(userInfoEmpty);
  const setField = (field: string) => (value: string) => {
    setInfo({
      ...info,
      [field]: value,
    });
  };
  const [isLoading, setLoading] = useState(false);
  const [isComplete, setComplete] = useState(false);

  const submit = async () => {
    info["Created At"] = moment(new Date()).format("DD-MM-YYYY HH:mm:ss");
    const emptyFields = keys(info).filter((field) => !get(info, field));
    if (emptyFields.length > 0) {
      alert(`${emptyFields.join(", ")} is not empty!`);
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 100));
    post(
      "https://api.aadawards.com/sheets/173I8ncfnFcKVw9uV50Iw7PJCmF33yGn5AEeV8RQfAC8/edit?sheetName=DATA",
      info
    )
      .then(() => {
        setComplete(true);
      })
      .catch((err) => {
        alert(`Error: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputs}>
        <InputField
          label="First Name*"
          placeholder="Your First Name"
          onChanged={setField("First Name")}
        />
        <InputField
          label="Last Name*"
          placeholder="Your Last Name"
          onChanged={setField("Last Name")}
        />
        <InputField
          label="Email*"
          placeholder="Your Email"
          onChanged={setField("Email")}
        />
        <InputField
          label="Phone Number*"
          placeholder="Your Your Phone Number"
          onChanged={setField("Phone Number")}
        />
        <InputField
          label="Company*"
          placeholder="Your Company Name"
          onChanged={setField("Company")}
        />
        <InputField
          label="Title*"
          placeholder="Your Title"
          onChanged={setField("Title")}
        />
      </div>
      <button className={styles.button} onClick={(isLoading) => submit()}>
        Register
      </button>
      <Dialog open={isComplete} onClose={() => setComplete(false)}>
        <div className={styles.completeDialog}>
          <div className={styles.message}>
            Thank you for your interest. Your download will begin shortly.
          </div>
          <Link className={styles.button} href="/">
            Go to home page
          </Link>
        </div>
      </Dialog>
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <div>
        <Head>
          <title>Elevating Visionary Architecture</title>
          <meta name="description" content="Asia Architecture Design Awards" />
        </Head>
        <Image
          className={styles.background}
          src="/elevating/landing.jpg"
          alt="Background"
          fill
        />
        <Image
          className={styles.logo}
          src="/elevating/Logo.svg"
          alt="Logo"
          width={350}
          height={150}
        />
        <h1 className={styles.title}>elevating visionary architecture</h1>
        <h3 className={styles.subTitle}>
          Driving VIETNAM’S Real estate investment
        </h3>
        <img
          className={styles.line}
          src="/elevating/gach.svg"
          alt="Background"
        />
        <div className={styles.desc}>
          Elevate your understanding of visionary architecture’s role in driving
          real estate
          <br /> invesment in Vietnam by joining the Asia Awards Organization
          for the
          <br /> <b>Evevating Visionary Architecture</b> event.
          <div>
            Join investors, architects, and enthusiasts for an afternoon of
            insightful <br /> presentations, networking, and discussions!
          </div>
        </div>
        <div className={styles.flexTimeline}>
          <img
            className={styles.imageAgenda}
            src="/elevating/textAgenda.svg"
            alt="Timeline"
          />
          <img
            className={styles.timeline}
            src="/elevating/timelineWeb.svg"
            alt="Timeline"
          />
        </div>
        <img
          className={styles.timeline}
          src="/elevating/dateTime.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/elevating/agendaMobile.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/elevating/dateTimeMb.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/elevating/dateTimeMb.svg"
          alt="Timeline"
        />
        <div className={styles.signupLabel}>
          <h2>Register today to secure your spot!</h2>
          <img
            className={styles.waveSignup}
            src="/elevating/wave_signup.svg"
            alt="Background"
          />
        </div>
        <RegisterForm />
        <img
          className={styles.footer}
          src="/elevating/footer.svg"
          alt="Background"
        />
        <img
          className={styles.footerMobile}
          src="/elevating/footerMobile.svg"
          alt="Background"
        />
      </div>
    </div>
  );
}
