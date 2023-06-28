import Dialog from "@mui/material/Dialog";
import { get, keys } from "lodash";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { post } from "../../services/http";
import { TextInputValidator, ValueChanged } from "../../utils/interface";
import styles from "./styles.module.scss";
import { Checkbox, FormControlLabel } from "@mui/material";
import { requiredValidator } from "../../utils/validators";
import { OrderModel, createOrder, orderEmpty } from "../../services/PaymentService";
import winnerSlice, { orderSlice, selectOrder } from "../../store/modules/winner";
import { useAppDispatch, useAppSelector } from "../../store";

declare type InputFieldProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChanged: ValueChanged<string>;
  validator?: TextInputValidator;
};

function InputField({ label, placeholder,value, onChanged,validator }: InputFieldProps) {
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

declare type UserInfo = {
  ["First Name"]: string;
  ["Last Name"]: string;
  Email: string;
  ["Phone Number"]: string;
  Company: string;
  Title: string;
  ["Registration Date"]: string;
  ["Number of Attendee"]: number;
  Amount: number;
};
const userInfoEmpty = {
  "First Name": "",
  "Last Name": "",
  Email: "",
  ["Phone Number"]: "",
  Company: "",
  Title: "",
  "Registration Date": "",
  "Number of Attendee": 0,
  Amount:0,
};
const defaultRequiredMessage = "Please complete this field.";
function RegisterForm() {
  const [isForceValidate, setForceValidate] = useState(false);
  const [info, setInfo] = useState<UserInfo>(userInfoEmpty);
  const setField = (field: string) => (value: string) => {
    setInfo({
      ...info,
      [field]: value,
    });
  };
  const [isApprove, setApprove] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const [selectedCount, setSelectedCount] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(350);
  const [order, setOrder] = useState<OrderModel>(orderEmpty);


  function requiredFieldValidator(text: string) {
    if (!isForceValidate) return "";
    return requiredValidator(text, defaultRequiredMessage);
  }
  const handleIncrement = () => {
    setSelectedCount((prevCount) => prevCount + 1);
    setSelectedAmount((prevAmount) => prevAmount + 350);
  };
  const handleDecrement = () => {
    if(selectedCount > 1) {
      setSelectedCount((prevCount) => prevCount - 1);
      setSelectedAmount((prevAmount) => prevAmount - 350);
    }
  };

  // const submit = async () => {
    
  //   info["Registration Date"] = moment(new Date()).format("DD-MM-YYYY HH:mm:ss");
  //   info["Number of Attendee"] = selectedCount;
  //   info["Amount"] = selectedAmount;
  //   const emptyFields = keys(info).filter((field) => !get(info, field));
  //   if (emptyFields.length > 0) {
  //     setForceValidate(true);
  //     return;
  //   }
  //   setLoading(true);
    
  //   // await new Promise((resolve) => setTimeout(resolve, 100));
  //   // post(
  //   //   "https://api.aadawards.com/sheets/1hNmk_3WwF7SCEfoWSYjP2UF_vTax0DRoYFz6fz3kOAc/edit?sheetName=DATA",
  //   //   info
  //   // )
  //   //   .then(() => {
  //   //     setComplete(true);
  //   //   })
  //   //   // .catch((err) => {
  //   //   //   alert(`Error: ${err}`);
  //   //   // })
  //   //   .finally(() => {
  //   //     setLoading(false);
  //   //   });
  // };
  const handleSubmit = () => {
    setForceValidate(true);
  
    dispatch(createOrder(order));
  };
  const ordered = useAppSelector(selectOrder);
  const dispatch = useAppDispatch();
  const onChanged: ValueChanged<OrderModel> = (order) => {
    dispatch(winnerSlice.actions.orderUpdated(order));
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputs}>
        <InputField
          label="First Name*"
          placeholder="Your First Name"
          value={ordered?.firstName}
          onChanged={(firstName) =>
            dispatch(
              orderSlice.actions.orderUpdated({
                ...order,
                firstName,
              })
            )
          }
          validator={requiredFieldValidator}
        />
        <InputField
          label="Last Name*"
          placeholder="Your Last Name"
          value={ordered?.lastName}
          onChanged={(lastName) =>
            dispatch(
              orderSlice.actions.orderUpdated({
                ...order,
                lastName,
              })
            )
          }
          validator={requiredFieldValidator}
        />
        <InputField
          label="Email*"
          placeholder="Your Email"
          value={ordered?.email}
          onChanged={(email) =>
            dispatch(
              orderSlice.actions.orderUpdated({
                ...order,
                email,
              })
            )
          }
          validator={requiredFieldValidator}
        />
        <InputField
          label="Phone Number*"
          placeholder="Your Your Phone Number"

          value={ordered?.phoneNumber}
          onChanged={(phoneNumber) =>
            dispatch(
              orderSlice.actions.orderUpdated({
                ...order,
                phoneNumber,
              })
            )
          }
                    validator={requiredFieldValidator}
        />
        <InputField
          label="Company*"
          placeholder="Your Company Name"
          value={ordered?.company}
          onChanged={(company) =>
            dispatch(
              orderSlice.actions.orderUpdated({
                ...order,
                company,
              })
            )
          }
          validator={requiredFieldValidator}
        />
        <InputField
          label="Title*"
          placeholder="Your Title"
          value={ordered?.title}
          onChanged={(title) =>
            dispatch(
              orderSlice.actions.orderUpdated({
                ...order,
                title,
              })
            )
          }
          validator={requiredFieldValidator}
        />
        <div className={styles.number}>
          <p>
            <span className={styles.textNumber}>Number of Attendee(s)</span> 
            <span className={styles.counter}>
            <span className={styles.count}>{selectedCount}</span>
            <span className={styles.amount}>{selectedAmount} USD</span>
            </span>
            <button className={styles.incre} onClick={handleIncrement}>+</button>
            <button className={styles.decre} onClick={handleDecrement}>-</button>
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
          Step into the world of architectural excellence at the highly anticipated 2023 Asia Architecture
          <br /> Design Awards, an extraordinary red carpet event set to dazzle at the iconic Marina Bay Sands in
          <br /> Singapore. This prestigious gathering will attract the crème de la crème of the design and build
          <br /> industry, including renowned industry experts, visionary real estate developers, and
          <br /> distinguished professionals in the world of architecture.
          <div className={styles.descBottom}>
            Against the backdrop of Marina Bay Sands' breathtaking elegance, this star-studded affair will
            <br /> recognize and honor outstanding achievements architecture throughout Asia. Showcasing
            <br /> innovative designs, sustainable practices, and groundbreaking concepts, this red carpet event
            <br /> promises to be an unforgettable celebration of creativity and ingenuity. Get ready to be inspired,
            <br /> as we roll out the red carpet and shine a spotlight on the remarkable visionaries shaping the
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
          src="/winnernight/dateTime.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/winnernight/textAgendaMb.svg"
          alt="Timeline"
        />
        <img
          className={styles.timelineMobile}
          src="/winnernight/timelineMb.svg"
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
        COPYRIGHT © 2023 - All rights reserved - Asia Awards Organization PTE. LTD.
        </h4>
      </div>
    </div>
  );
}
