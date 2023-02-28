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
  Company: string;
  ["Created At"]: string;
};
const userInfoEmpty = {
  "First Name": "",
  "Last Name": "",
  Email: "",
  Company: "",
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
    post("https://api.aadawards.com/sheets/start-with-why", info)
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
          label="Company*"
          placeholder="Your Company Name"
          onChanged={setField("Company")}
        />
      </div>
      <Link
        className={styles.button}
        onClick={isLoading ? undefined : () => submit()}
        href="/documents/START_WITH_WHY_Keynotes.zip"
      >
        {isLoading ? "Sending..." : "DOWNLOAD KEYNOTE"}
      </Link>
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
          <title>Start With Why</title>
          <meta name="description" content="Asia Architecture Design Awards" />
        </Head>
        <Image
          className={styles.background}
          src="/start_with_why/bg.jpg"
          alt="Background"
          fill
        />
        <img
          className={styles.waveTop}
          src="/start_with_why/wave_top.svg"
          alt="Background"
        />
        <Image
          className={styles.logo}
          src="/start_with_why/aao_aada_logo.svg"
          alt="Logo"
          width={204}
          height={48}
        />
        <h1 className={styles.title}>speakerS’ keynotes</h1>
        <div className={styles.desc}>
          The{" "}
          <b>
            START WITH WHY - WHY ARCHITECTS SHOULD REALLY TELL THEIR STORIES
          </b>{" "}
          conference addressed one of the “pain-points” for local architects,
          designers, and business owners:{" "}
          <b>
            Why and How to efficiently Build Your Brand Credibility and Personal
            Branding Campaign.
          </b>
        </div>
        <div className={styles.subTitle}>
          Register to receive our speaker keynotes now!
        </div>
        <img
          className={styles.timeline}
          src="/start_with_why/timeline.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/start_with_why/timeline_mobile.svg"
          alt="Timeline"
        />
        <div className={styles.signupLabel}>
          <h2>Save the most important KEYNOTEs of START WITH WHY</h2>
          <img
            className={styles.waveSignup}
            src="/start_with_why/wave_signup.svg"
            alt="Background"
          />
        </div>

        <RegisterForm />
        <img
          className={styles.waveBottom}
          src="/start_with_why/wave_bottom.svg"
          alt="Background"
        />
      </div>
    </div>
  );
}
