import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ProjectNominateEntry,
  ProjectNominateStatus,
} from "../../../models/NominateModel";
import { store, useAppDispatch, useAppSelector } from "../../../store";
import nominateSlice, {
  fetchAllNominate,
  fetchProjectNominate,
} from "../../../store/modules/nominate";
import { TextInputValidator, ValueChanged } from "../../../utils/interface";

import { requiredValidator } from "../../../utils/validators";
import styles from "./styles.module.scss";
import SlideImage from "../SlideImage";
import { useRouter } from "next/router";
import { selectToken, selectUserId } from "../../../store/modules/user";
import {
  ProjectScoreState,
  differetiationSelector,
  functionSelector,
  ideaSelector,
  impactSelector,
  innovationSelector,
  setDifferentiation,
  setFunction,
  setIdea,
  setImpact,
  setInnovation,
} from "../../../store/modules/scorecomment";
import React from "react";
import { postProjectScore } from "../../../services/ScoreService";
import { getProgressPercent } from "../../../utils/score";
import ModalSuccess from "../../../components/ModalSuccess";

declare type Props = {
  onSetScore?: any;
  value?: string;
  validator?: TextInputValidator;
};

function NumberSelector({ onSetScore, value, validator }: Props) {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const numbers: number[] = [1, 2, 3, 4, 5];
  const message = validator ? validator(value || "") : "";
  return (
    <div className={styles.inputAboutField}>
      <div className={styles.numberSelector}>
        {numbers.map((number) => (
          <button
            value={value || ""}
            key={number}
            className={styles.score}
            onClick={() => {
              setSelectedNumber(number);
              onSetScore(number);
            }}
            style={{
              backgroundColor: selectedNumber === number ? "#a67f56" : "white",
            }}
          >
            {number}
          </button>
        ))}
      </div>
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}
declare type AboutField = {
  label: string;
  desc: string;
  descScore: string;
  required?: boolean;
  value?: string;
  placeholder: string;
  disable: boolean;
};

function AboutField({
  label,
  desc,
  descScore,
  value,
  placeholder,
  required = true,
  disable,
}: AboutField) {
  return (
    <div className={styles.inputAboutField}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <div className={styles.descAndOverview}>
        <div className={styles.desc}>{desc}</div>
      </div>
      <textarea
        placeholder={placeholder}
        disabled={disable}
        value={value || ""}
        readOnly
        // onChange={(event) => onChanged(event.target.value)}
        className={styles.input}
      />
      <div className={styles.descAndOverview}>
        <div className={styles.descScore}>{descScore}</div>
      </div>
    </div>
  );
}
declare type InputAboutField = {
  value?: string;
  onChanged: ValueChanged<string>;
  validator?: TextInputValidator;
  onSetScore: any;
};

declare type ViewGallery = {
  label: string;
  desc: string;
  required?: boolean;
  recommendLength?: number;
  disable: boolean;
  validator?: TextInputValidator;
};

function ViewGallery({ label, desc, required = true }: ViewGallery) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchProjectNominate());
    dispatch(fetchAllNominate());
  }, [dispatch, userId]);

  return (
    <div className={styles.inputAboutField}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <div className={styles.descAndOverview}>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
}

function InputAboutField({
  value,
  onChanged,
  validator,
  onSetScore,
}: InputAboutField) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchProjectNominate());
    dispatch(fetchAllNominate());
  }, [dispatch, userId]);

  const route = useRouter();

  const message = validator ? validator(value || "") : "";
  const [isForceValidate, setForceValidate] = useState(false);
  function requiredFieldValidator(text: string) {
    if (!isForceValidate) return "";
    return requiredValidator(text, defaultRequiredMessage);
  }
  return (
    <div className={styles.inputAboutField}>
      <NumberSelector
        onSetScore={onSetScore}
        value={value || ""}
        validator={requiredFieldValidator}
      />
      <textarea
        placeholder="Please provide your comment in this field."
        value={value || ""}
        onChange={(event) => onChanged(event.target.value)}
        className={styles.input}
      />
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}

declare type ViewProps = {
  project: ProjectNominateEntry;
};

const defaultRequiredMessage = "Please fill out this field before submitting.";

export default function _View({ project }: ViewProps) {
  const dispatch = useAppDispatch();
  const [isForceValidate, setForceValidate] = useState(false);
  const canEdit = project?.status != ProjectNominateStatus.SUBMITED;
  const [isApprove, setApprove] = useState(!canEdit);
  const ideaSelect = useAppSelector(ideaSelector);
  const impactSelect = useAppSelector(impactSelector);
  const differentiationSelect = useAppSelector(differetiationSelector);
  const functionSelect = useAppSelector(functionSelector);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const innovationSelect = useAppSelector(innovationSelector);
  const [isValid, setIsValid] = useState<boolean>(false);
  if (!project) return <div />;

  function aboutFieldValidator(text: string) {
    if (!isForceValidate) return "";
    return getProgressPercent(text) >= 30 ? "" : "This field is required!";
  }

  const handleSubmit = () => {
    setForceValidate(true);
    const token = selectToken(store.getState());
    const data: ProjectScoreState = {
      idea: ideaSelect,
      impact: impactSelect,
      innovation: innovationSelect,
      differentiation: differentiationSelect,
      function: functionSelect,
    };

    postProjectScore(project.id, data, token).then(() => setIsSuccess(true));
  };
  return (
    <div key={project.id} className={styles.container}>
      <ViewGallery
        disable={!canEdit}
        label="Photo Gallery"
        desc="Maximum 10 photos submitted by Nominee."
      />
      <div className={styles.inputAboutField}>
        {project && <SlideImage project={project} />}
      </div>
      <AboutField
        disable={!canEdit}
        label="Idea"
        desc="How the project begins, how it achieves the origin of the idea."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.idea}
        placeholder={project?.idea?.toString()}
      />
      <InputAboutField
        value={ideaSelect.comment}
        validator={aboutFieldValidator}
        onChanged={(idea) =>
          dispatch(setIdea({ ...ideaSelect, comment: idea }))
        }
        onSetScore={(idea: number) => {
          dispatch(setIdea({ ...ideaSelect, score: idea }));
        }}
      />

      <AboutField
        disable={!canEdit}
        label="Impact"
        desc="What impactful criteria that project have met or exceeded, how the project benefits the society."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.impact}
        placeholder={project?.impact?.toString()}
      />

      <InputAboutField
        value={impactSelect.comment}
        validator={aboutFieldValidator}
        onChanged={(impact) =>
          dispatch(setImpact({ ...impactSelect, comment: impact }))
        }
        onSetScore={(impact: number) => {
          dispatch(setImpact({ ...impactSelect, score: impact }));
        }}
      />
      <AboutField
        disable={!canEdit}
        label="Differentiation"
        desc="What are the project USPs, how it can be a stand-out comparing to the others at the same category."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.differentiation}
        placeholder={project?.differentiation?.toString()}
      />

      <InputAboutField
        value={differentiationSelect.comment}
        validator={aboutFieldValidator}
        onChanged={(differentiation) =>
          dispatch(
            setDifferentiation({
              ...differentiationSelect,
              comment: differentiation,
            })
          )
        }
        onSetScore={(differentiation: number) => {
          dispatch(
            setDifferentiation({
              ...differentiationSelect,
              score: differentiation,
            })
          );
        }}
      />

      <AboutField
        disable={!canEdit}
        label="Function"
        desc="What is the usage of the project, how it benefits the user/ owner."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.function}
        placeholder={project?.function?.toString()}
      />

      <InputAboutField
        value={functionSelect.comment}
        validator={aboutFieldValidator}
        onChanged={(value) =>
          dispatch(setFunction({ ...functionSelect, comment: value }))
        }
        onSetScore={(value: number) => {
          dispatch(setFunction({ ...functionSelect, score: value }));
        }}
      />
      <AboutField
        disable={!canEdit}
        label="Innovation"
        desc="How was the project executed, what was innovated during the whole process."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.innovation}
        placeholder={project?.innovation?.toString()}
      />

      <InputAboutField
        value={innovationSelect.comment}
        validator={aboutFieldValidator}
        onChanged={(innovation) =>
          dispatch(setInnovation({ ...innovationSelect, comment: innovation }))
        }
        onSetScore={(innovation: number) => {
          dispatch(setInnovation({ ...innovationSelect, score: innovation }));
        }}
      />
      <div style={{ height: 20 }} className={styles.completedBox} />
      <FormControlLabel
        className={styles.checkBox}
        disabled={canEdit}
        control={
          <Checkbox onChange={(event) => setApprove(event.target.checked)} />
        }
        label="By confirming this statement, I hereby acknowledge that my evaluation for this project has been completed."
      />
      <button className={styles.buttonSubmit} onClick={handleSubmit}>
        Submit
      </button>

      {/* <ModalSuccess isOpen={isSuccess} onSetIsOpen={setIsSuccess} /> */}
    </div>
  );
}
