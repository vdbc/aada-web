import { Checkbox, FormControlLabel } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  WinnerNightOrderModel,
  createOrder,
  orderEmpty,
} from "../../services/WinnerNightService";
import { TextInputValidator, ValueChanged } from "../../utils/interface";
import { requiredValidator } from "../../utils/validators";
import styles from "./styles.module.scss";

declare type InputFieldProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChanged: ValueChanged<string>;
  validator?: TextInputValidator;
};

function InputField({
  label,
  placeholder,
  value,
  onChanged,
  validator,
}: InputFieldProps) {
  const message = validator ? validator(value || "") : "";
  return (
    <div className={styles.inputFieldContainer}>
      <label>{label}</label>
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={(event) => onChanged(event.target.value)}
      />
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}

const defaultRequiredMessage = "Please complete this field.";

function getReturnUrl() {
  return `${window.location.origin}/winners-night/success`;
}

const PRICE = 350;

function RegisterForm() {
  const [isForceValidate, setForceValidate] = useState(false);
  const [isApprove, setApprove] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const [order, setOrder] = useState<WinnerNightOrderModel>(orderEmpty);
const phoneValid = true;
  function requiredPhoneValidator(text: string) {
    if (!phoneValid) return "";
    if (text.trim() === "") {
      return defaultRequiredMessage;
    } else if (!/^\+?\d{9,15}$/.test(text)) {
      return "Please enter a valid phone number.";
    }
    return "";
  }
  const emailValid = true;
  function requiredEmailValidator(text: string) {
    if (!emailValid) return "";
    if (text.trim() === "") {
      return defaultRequiredMessage;
    } else if (!/^\S+@\S+\.\S+$/.test(text)) {
      return "Please enter a valid email address.";
    }
    return "";
  }
  function requiredFieldValidator(text: string) {
    return text.trim() === "" ? defaultRequiredMessage : "";
  }
  const handleIncrement = () => {
    setOrder({
      ...order,
      attendees: order.attendees + 1,
    });
  };
  const handleDecrement = () => {
    if (order.attendees <= 1) return;
    setOrder({
      ...order,
      attendees: order.attendees - 1,
    });
  };
  const handleSubmit = async () => {
    const returnUrl = getReturnUrl();
    if (!isApprove) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    const cancelUrl = window.location.href;
    setLoading(false);
    localStorage.setItem("firstName", order.firstName);
    localStorage.setItem("lastName", order.lastName);
    localStorage.setItem("email", order.email);
    localStorage.setItem("phoneNumber", order.phoneNumber);
    localStorage.setItem("company", order.company);
    localStorage.setItem("title", order.title);
    localStorage.setItem("attendees", order.attendees.toString());
    const paymentUrl = await createOrder(order, returnUrl, cancelUrl);
    console.log("mylog paymentUrl: ", paymentUrl);
    window.open(paymentUrl, "_self");
        setForceValidate(true);

  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputs}>
        <InputField
          label="First Name*"
          placeholder="Your First Name"
          value={order.firstName}
          onChanged={(value) => setOrder({ ...order, firstName: value })}
          validator={requiredFieldValidator}
        />
        <InputField
          label="Last Name*"
          placeholder="Your Last Name"
          value={order.lastName}
          onChanged={(value) => setOrder({ ...order, lastName: value })}
          validator={requiredFieldValidator}
        />
        <InputField
          label="Email*"
          placeholder="Your Email"
          value={order.email}
          onChanged={(value) => setOrder({ ...order, email: value })}
          validator={requiredEmailValidator}
        />
        <InputField
          label="Phone Number*"
          placeholder="Your Your Phone Number"
          value={order.phoneNumber}
          onChanged={(value) => setOrder({ ...order, phoneNumber: value })}
          validator={requiredPhoneValidator}
        />
        <InputField
          label="Company*"
          placeholder="Your Company Name"
          value={order.company}
          onChanged={(value) => setOrder({ ...order, company: value })}
          validator={requiredFieldValidator}
        />
        <InputField
          label="Title*"
          placeholder="Your Title"
          value={order.title}
          onChanged={(value) => setOrder({ ...order, title: value })}
          validator={requiredFieldValidator}
        />
        <div className={styles.number}>
          <p>
            <span className={styles.textNumber}>Number of Attendee(s)</span>
            <span className={styles.counter}>
              <span className={styles.count}>{order.attendees}</span>
              <span className={styles.amount}>
                {order.attendees * PRICE} USD
              </span>
            </span>
            <button className={styles.incre} onClick={handleIncrement}>
              +
            </button>
            <button className={styles.decre} onClick={handleDecrement}>
              -
            </button>
          </p>
        </div>
        <FormControlLabel
          className={styles.checkBox}
          control={
            <Checkbox
              className={styles.tickBox}
              checked={isApprove}
              onChange={(event) => setApprove(event.target.checked)}
            />
          }
          label="By confirming this statement, I hereby acknowledge the accuracy of my information and agree to complete my payment fee."
        />
      </div>

      <button className={styles.button} onClick={(isLoading) => handleSubmit()}>
        PAYMENT
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
          <title>Winners' Night</title>
          <meta name="description" content="Asia Architecture Design Awards" />
        </Head>

        <Image
          className={styles.background}
          src="/winnernight/background.jpg"
          alt="Background"
          fill
        />

        <Image
          className={styles.logo}
          src="/start_with_why/aao_aada_logo.svg"
          alt="Logo"
          width={204}
          height={48}
        />
        <h3 className={styles.subTitle}>
          2023 ASIA ARCHITECTURE DESIGN AWARDS
        </h3>
        <h1 className={styles.title}>WINNERS' NIGHT</h1>

        <div className={styles.desc}>
          Step into the world of architectural excellence at the highly
          anticipated 2023 Asia Architecture
          <br /> Design Awards, an extraordinary red carpet event set to dazzle
          at the iconic Marina Bay Sands in
          <br /> Singapore. This prestigious gathering will attract the crème de
          la crème of the design and build
          <br /> industry, including renowned industry experts, visionary real
          estate developers, and
          <br /> distinguished professionals in the world of architecture.
          <div className={styles.descBottom}>
            Against the backdrop of Marina Bay Sands' breathtaking elegance,
            this star-studded affair will
            <br /> recognize and honor outstanding achievements architecture
            throughout Asia. Showcasing
            <br /> innovative designs, sustainable practices, and groundbreaking
            concepts, this red carpet event
            <br /> promises to be an unforgettable celebration of creativity and
            ingenuity. Get ready to be inspired,
            <br /> as we roll out the red carpet and shine a spotlight on the
            remarkable visionaries shaping the
            <br /> future of our built environment.
          </div>
        </div>
        <div className={styles.flexTimeline}>
          <img
            className={styles.imageAgenda}
            src="/winnernight/textAgenda.svg"
            alt="Timeline"
          />
          <img
            className={styles.timeline}
            src="/winnernight/agenda.svg"
            alt="Timeline"
          />
        </div>
        <img
          className={styles.timeline}
          src="/winnernight/dateTime1.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/winnernight/textAgendaMb.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/winnernight/timelineMb1.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/winnernight/dateTimeMb.svg"
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
          className={styles.footerSponsor}
          src="/winnernight/sponsorFooter.svg"
          alt="Background"
        />
        <img
          className={styles.footerPartners}
          src="/winnernight/partnersFooter.svg"
          alt="Background"
        />
        <img
          className={styles.footerMobile}
          src="/winnernight/footerMb.svg"
          alt="Background"
        />
        <h4 className={styles.textFooter}>
          COPYRIGHT © 2023 - All rights reserved - Asia Awards Organization PTE.
          LTD.
        </h4>
      </div>
    </div>
  );
}
