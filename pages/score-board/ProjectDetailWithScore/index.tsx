import { useState } from "react";
import Select from "react-select";
import ProgressBar from "../../../components/ProgressBar";
import { ProjectNominateStatus } from "../../../models/NominateModel";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  selectIsNominatePaid,
  selectProjectNomintateDetail,
  submitProject,
} from "../../../store/modules/nominate";
import { countrieDetails, countries } from "../../../utils/countries";
import { TextInputValidator, ValueChanged } from "../../../utils/interface";
import {
  canSubmitProject,
  getProgressPercentField,
} from "../../../utils/project-nominate";
import { requiredValidator } from "../../../utils/validators";
import SlideImage from "../SlideImage";
import styles from "./styles.module.scss";

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

declare type ViewGalleryProps = {
  label: string;
  desc: string;
  required?: boolean;
  recommendLength?: number;
  disable: boolean;
  validator?: TextInputValidator;
};
function ViewGallery({ label, desc, required = true }: ViewGalleryProps) {
  return (
    <div className={styles.inputAboutField}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <div className={styles.descAndOverview}>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
}

declare type InputAboutFieldProps = {
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
}: InputAboutFieldProps) {
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

declare type ProjectFieldScoreProps = {
  fieldName: string;
  content: string;
  hint: string;
  comment: string;
  score?: number;
};

function ProjectFieldScore({
  fieldName: field,
  content,
  hint,
  comment,
  score,
}: ProjectFieldScoreProps) {
  return (
    <div className={styles.projectFieldScore}>
      <h3>{field}*</h3>
      <div className={styles.hint}>{hint}</div>
      <div className={styles.content}>{content}</div>
      <textarea placeholder="Please provide your comment in this field" />
    </div>
  );
}

declare type ProjectField = {
  fieldName: "idea" | "impact" | "differentiation" | "function" | "innovation";
  hint: string;
};

declare type ViewProps = {
  projectId: number;
};

const defaultRequiredMessage = "Please fill out this field before submitting.";

export default function _View({ projectId }: ViewProps) {
  const project = useAppSelector(selectProjectNomintateDetail(projectId));
  const dispatch = useAppDispatch();
  const [isForceValidate, setForceValidate] = useState(false);
  const canEdit = project?.status != ProjectNominateStatus.SUBMITED;
  const [isApprove, setApprove] = useState(!canEdit);
  const isPaid = useAppSelector(selectIsNominatePaid);
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
  const fields: ProjectField[] = [
    {
      fieldName: "idea",
      hint: "How the project begins, how it achieves the origin of the idea.",
    },
    {
      fieldName: "impact",
      hint: "What impactful criteria that project have met or exceeded, how the project benefits the society.",
    },
    {
      fieldName: "differentiation",
      hint: "What are the project USPs, how it can be a stand-out comparing to the others at the same category..",
    },
    {
      fieldName: "function",
      hint: "What is the usage of the project, how it benefits the user/ owner..",
    },
    {
      fieldName: "innovation",
      hint: "How was the project executed, what was innovated during the whole process..",
    },
  ];

  return (
    <div key={project.id} className={styles.container}>
      <ViewGallery
        disable={!canEdit}
        label="Photo Gallery"
        desc="Maximum 10 photos submitted by Nominee."
      />
      <SlideImage project={project} />

      {fields.map((field) => (
        <ProjectFieldScore
          fieldName={field.fieldName}
          hint={field.hint}
          content={project[field.fieldName]}
          comment=""
          score={1}
        />
      ))}
    </div>
  );
}
