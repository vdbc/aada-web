import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import Select from "react-select";
import InputField from "../../../components/InputField";
import ProgressBar from "../../../components/ProgressBar";
import { paypalClientId } from "../../../models/AppConfig";
import { ProjectNominateStatus } from "../../../models/NominateModel";
import { useAppDispatch, useAppSelector } from "../../../store";
import nominateSlice, {
  selectProjectNomintateDetail,
  submitProject,
} from "../../../store/modules/nominate";
import { countrieDetails, countries } from "../../../utils/countries";
import { TextInputValidator, ValueChanged } from "../../../utils/interface";
import {
  canSubmitProject,
  getProgressPercentField,
} from "../../../utils/project-nominate";
import { selectIsNominatePaid } from "../../../store/modules/nominate";
import { requiredValidator } from "../../../utils/validators";
import InputImages from "../InputImages";
import styles from "./styles.module.scss";
import ButtonPaypal from "../../../components/ButtonPaypal";

declare type SelectLocaleProps = {
  value: string;
  placeholder: string;
  onChanged: ValueChanged<string>;
  disable: boolean;
};

function SelectLocale({
  disable,
  onChanged,
  value,
  placeholder,
}: SelectLocaleProps) {
  return (
    <div className={styles.selectLocaleContainer}>
      <Select
        isDisabled={disable}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "transparent",
          }),
        }}
        className={styles.select}
        onChange={(event) => onChanged(event?.name ?? "")}
        placeholder={placeholder}
        value={countrieDetails[value]}
        getOptionLabel={(item) => `${item.flag} ${item.name}`}
        getOptionValue={(item) => item.name}
        options={countries}
        blurInputOnSelect
      />
    </div>
  );
}

declare type InputAboutField = {
  label: string;
  desc: string;
  required?: boolean;
  value?: string;
  recommendLength?: number;
  onChanged: ValueChanged<string>;
  disable: boolean;
  validator?: TextInputValidator;
};

function InputAboutField({
  label,
  desc,
  value,
  onChanged,
  required = true,
  recommendLength = 300,
  disable,
  validator,
}: InputAboutField) {
  const percent = getProgressPercentField(value);
  const message = validator ? validator(value || "") : "";
  return (
    <div className={styles.inputAboutField}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <textarea
        disabled={disable}
        value={value || ""}
        onChange={(event) => onChanged(event.target.value)}
        className={styles.input}
      />
      <div className={styles.descAndOverview}>
        <div className={styles.desc}>
          {desc}
          <br />
          {`Answer should be less than ${recommendLength} words`}
        </div>
        <div className={styles.overview}>
          <ProgressBar percent={percent} className={styles.progress} />
          <div className={styles.percent}>{Math.round(percent) + "%"}</div>
        </div>
      </div>
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}

declare type ViewProps = {
  projectId: number;
};

const defaultRequiredMessage = "Please fill out this field before submitting.";

export default function _View({ projectId }: ViewProps) {
  const isPaid = useAppSelector(selectIsNominatePaid);
  const project = useAppSelector(selectProjectNomintateDetail(projectId));
  const dispatch = useAppDispatch();
  const [isForceValidate, setForceValidate] = useState(false);
  const canEdit = project?.status != ProjectNominateStatus.SUBMITED;
  const [isApprove, setApprove] = useState(!canEdit);

  if (!project) return <div />;

  function imagesValidator(images: string[]) {
    if (!isForceValidate) return "";
    return requiredValidator(images.join(""), defaultRequiredMessage);
  }
  function requiredFieldValidator(text: string) {
    if (!isForceValidate) return "";
    return requiredValidator(text, defaultRequiredMessage);
  }
  function aboutFieldValidator(text: string) {
    if (!isForceValidate) return "";
    return getProgressPercentField(text) >= 30
      ? ""
      : "Please fill out at least 30% of this field before submitting.";
  }

  function countryValidator(text: string) {
    if (!isForceValidate) return "";
    return (
      requiredValidator(text, defaultRequiredMessage) ||
      requiredValidator(project.country, defaultRequiredMessage)
    );
  }

  const canSubmit = isApprove && canSubmitProject(project);
  const handleSubmit = () => {
    setForceValidate(true);
    if (!canSubmit) return;
    dispatch(submitProject(project));
  };

  return (
    <div key={project.id} className={styles.container}>
      <InputField
        className={styles.inputField}
        inputClassName={styles.input}
        label="Your Entry Name"
        placeholder="Please type your entry name"
        value={project.name}
        disable={!canEdit}
        onChanged={(name) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              name,
            })
          )
        }
        validator={requiredFieldValidator}
        required
      />
      <InputField
        disable={!canEdit}
        prefix={
          <SelectLocale
            disable={!canEdit}
            placeholder="Country"
            value={project.country}
            onChanged={(country) =>
              dispatch(
                nominateSlice.actions.projectUpdated({
                  ...project,
                  country,
                })
              )
            }
          />
        }
        className={styles.inputField}
        inputClassName={styles.input}
        label="Location"
        placeholder="Type your city name"
        value={project.location}
        onChanged={(location) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              location,
            })
          )
        }
        validator={countryValidator}
        required
      />
      <h3>Tell Us About Your Project</h3>
      <InputAboutField
        disable={!canEdit}
        label="Idea"
        desc="How the project begins, how it achieves the origin of the idea."
        value={project.idea}
        validator={aboutFieldValidator}
        onChanged={(idea) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              idea,
            })
          )
        }
      />
      <InputAboutField
        disable={!canEdit}
        label="Impact"
        desc="What impactful criteria that project have met or exceeded, how the project benefits the society."
        value={project.impact}
        validator={aboutFieldValidator}
        onChanged={(impact) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              impact,
            })
          )
        }
      />
      <InputAboutField
        disable={!canEdit}
        label="Differentiation"
        desc="What are the project USPs, how it can be a stand-out comparing to the others at the same category."
        value={project.differentiation}
        validator={aboutFieldValidator}
        onChanged={(differentiation) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              differentiation,
            })
          )
        }
      />
      <InputAboutField
        disable={!canEdit}
        label="Function"
        desc="What is the usage of the project, how it benefits the user/ owner."
        value={project.function}
        validator={aboutFieldValidator}
        onChanged={(value) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              function: value,
            })
          )
        }
      />
      <InputAboutField
        disable={!canEdit}
        label="Innovation"
        desc="How was the project executed, what was innovated during the whole process."
        value={project.innovation}
        validator={aboutFieldValidator}
        onChanged={(innovation) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              innovation,
            })
          )
        }
      />
      <h3>Project Credit</h3>
      <InputField
        disable={!canEdit}
        className={styles.inputField}
        inputClassName={styles.input}
        label="Designer"
        placeholder="Enter name"
        value={project.designer}
        onChanged={(designer) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              designer,
            })
          )
        }
        validator={requiredFieldValidator}
        required
      />
      <InputField
        disable={!canEdit}
        className={styles.inputField}
        inputClassName={styles.input}
        label="Manufacturer"
        placeholder="Enter name"
        value={project.manufacturer}
        onChanged={(manufacturer) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              manufacturer,
            })
          )
        }
        validator={requiredFieldValidator}
        required
      />
      <InputField
        disable={!canEdit}
        className={styles.inputField}
        inputClassName={styles.input}
        label="Stakeholder/Owner"
        placeholder="Enter name"
        value={project.owner}
        onChanged={(owner) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              owner,
            })
          )
        }
        validator={requiredFieldValidator}
        required
      />
      <InputImages
        label="Your projects photo gallery*"
        disable={!canEdit}
        value={project.pictures}
        validator={imagesValidator}
        onChanged={(pictures) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              pictures,
            })
          )
        }
      />
      <div style={{ height: 20 }} className={styles.completedBox} />
      <div
        className={[
          styles.paymentButton,
          canSubmit ? styles.active : styles.inactive,
        ].join(" ")}
      >
        <ButtonPaypal disabled={!isPaid} />
        <div>
          <p>Please complete the entry fees before submitting</p>
        </div>
      </div>
      <FormControlLabel
        disabled={!canEdit}
        control={
          <Checkbox
            checked={canEdit ? isApprove : true}
            onChange={(event) => setApprove(event.target.checked)}
          />
        }
        label="I hereby consent that I have completed my submission and will not be permitted to do any adjustment thereafter."
      />
      <button
        className={[
          styles.buttonSubmit,
          canSubmit ? styles.active : styles.inactive,
        ].join(" ")}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
