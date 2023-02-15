import Dialog from "@mui/material/Dialog";
import { get, keys } from "lodash";
import moment from "moment";
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
  ["Job Title"]: string;
  ["Date of Birth"]: string;
  ["Created At"]: string;
};
const userInfoEmpty = {
  "First Name": "",
  "Last Name": "",
  Email: "",
  Company: "",
  "Job Title": "",
  "Date of Birth": "",
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
    info["Created At"] = moment(new Date()).format("DD/MM/YYYY HH:mm:ss");
    const emptyFields = keys(info).filter((field) => !get(info, field));
    if (emptyFields.length > 0) {
      alert(`${emptyFields.join(", ")} is not empty!`);
      return;
    }
    setLoading(true);
    post(
      "https://sheet.best/api/sheets/1807d521-c53d-49ec-bc18-03b725a3b991",
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
          label="First name* "
          placeholder="Your First Name"
          onChanged={setField("First Name")}
        />
        <InputField
          label="Last name* "
          placeholder="Your Last Name"
          onChanged={setField("Last Name")}
        />
        <InputField
          label="Email* "
          placeholder="Your Email"
          onChanged={setField("Email")}
        />
        <InputField
          label="Company* "
          placeholder="Your Company Name"
          onChanged={setField("Company")}
        />
        <InputField
          label="Job Title* "
          placeholder="Your Job Title"
          onChanged={setField("Job Title")}
        />
        <InputField
          label="Date of Birth* "
          placeholder="DD/MM/YYYY"
          onChanged={setField("Date of Birth")}
        />
      </div>
      <button onClick={isLoading ? undefined : () => submit()}>
        {isLoading ? "Sending..." : "Register now"}
      </button>
      <Dialog open={isComplete} onClose={() => setComplete(false)}>
        <div className={styles.completeDialog}>
          <div className={styles.message}>
            Thank you for your interest. We will be in touch shortly.
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
      <h1 className={styles.title}>Start with why</h1>
      <div className={styles.desc}>#01 - Why Architects</div>
      <div className={styles.desc}>should really tell their stories?</div>
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
        <h2>Sign up</h2>
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
  );
}
