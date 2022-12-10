import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import InputField from "../../../components/InputField";
import styles from "./styles.module.scss";

function SelectLocale() {
  return (
    <div className={styles.selectLocaleContainer}>
      <Image src="/flag_vn.svg" alt="Flag VN" width={33} height={22} />
      <div className={styles.value}>Viet Nam</div>
      <IoIosArrowDown />
    </div>
  );
}
function _onChangeDefault(value: string) {}

declare type InputAboutField = {
  label: string;
  desc: string;
  required?: boolean;
};

function InputAboutField({ label, desc, required = true }: InputAboutField) {
  return (
    <div className={styles.inputAboutField}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <textarea className={styles.input} />
      <div className={styles.desc}>{desc}</div>
    </div>
  );
}

export default function _View() {
  return (
    <div className={styles.container}>
      <InputField
        className={styles.inputField}
        label="Your Entry Name"
        placeholder="Please type your entry name"
        onChange={_onChangeDefault}
        required
      />
      <InputField
        prefix={<SelectLocale />}
        className={styles.inputField}
        label="Location"
        placeholder="Type your city name"
        onChange={_onChangeDefault}
        required
      />
      <h3>Tell Us About Your Project</h3>
      <InputAboutField
        label="Idea"
        desc={
          "How the project begins, how it achieves the origin of the idea.\nAnswer should be less than 300 words"
        }
      />
      <InputAboutField
        label="Impact"
        desc={
          "What impactful criteria that project have met or exceeded, how the project benefits the society.\nAnswer should be less than 300 words"
        }
      />
      <InputAboutField
        label="Differentiation"
        desc={
          "What are the project USPs, how it can be a stand-out comparing to the others at the same category.\nAnswer should be less than 300 words"
        }
      />
      <InputAboutField
        label="Function"
        desc={
          "What is the usage of the project, how it benefits the user/ owner.\nAnswer should be less than 300 words"
        }
      />
      <InputAboutField
        label="Innovation"
        desc={
          "How was the project executed, what was innovated during the whole process.\nAnswer should be less than 300 words"
        }
      />
      <h3>Project Credit</h3>
      <InputField
        className={styles.inputField}
        label="Designer"
        placeholder="Enter name"
        onChange={_onChangeDefault}
        required
      />
      <InputField
        className={styles.inputField}
        label="Manufacturer"
        placeholder="Enter name"
        onChange={_onChangeDefault}
        required
      />
      <InputField
        className={styles.inputField}
        label="Stakeholder/Owner"
        placeholder="Enter name"
        onChange={_onChangeDefault}
        required
      />
    </div>
  );
}
