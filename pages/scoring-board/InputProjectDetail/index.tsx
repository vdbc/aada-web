import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  fetchAllNominate,
  fetchProjectNominate,
} from "../../../store/modules/nominate";
import { TextInputValidator, ValueChanged } from "../../../utils/interface";

import { find } from "lodash";
import ModalSuccess from "../../../components/ModalSuccess";
import {
  ProjectScore,
  ProjectScoreField,
  ProjectScoreStatus,
  projectScopeEmpty,
} from "../../../models/ProjectScoreModel";
import { selectProjectNomintateDetail } from "../../../store/modules/nominate";
import scoreBoardSlice, {
  selectProjectScoreDetail,
  submitProjectScore,
} from "../../../store/modules/score-board";
import { selectUserId } from "../../../store/modules/user";
import { getProgressPercent } from "../../../utils/score";
import SlideImage from "../SlideImage";
import styles from "./styles.module.scss";

declare type Props = {
  onSetScore?: any;
  value?: string | number;
  validator?: any;
  readOnly?: boolean;
};

function NumberSelector({
  onSetScore,
  value,
  validator,
  readOnly = false,
}: Props) {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const message = validator(value || 0);

  return (
    <div className={styles.inputAboutField}>
      <div className={styles.numberSelector}>
        {numbers.map((number) => (
          <button
            value={value || 0}
            key={number}
            className={styles.score}
            onClick={() => {
              if (readOnly) return;
              onSetScore(number);
              setIsSelected(true);
            }}
            style={{
              backgroundColor: value === number ? "#a67f56" : "white",
            }}
          >
            {number}
          </button>
        ))}
      </div>
      {message && !isSelected && (
        <div className={styles.errorMessage}>{message}</div>
      )}
    </div>
  );
}
declare type AboutFieldProps = {
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
}: AboutFieldProps) {
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
        className={styles.input}
      />
      <div className={styles.descAndOverview}>
        <div className={styles.descScore}>{descScore}</div>
      </div>
    </div>
  );
}
declare type InputAboutFieldProps = {
  value?: string;
  onChanged: ValueChanged<string>;
  validator?: TextInputValidator;
  readOnly?: boolean;
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
  readOnly = false,
}: InputAboutFieldProps) {
  const message = validator ? validator(value || "") : "";

  return (
    <div className={styles.inputAboutField}>
      <textarea
        placeholder="Please provide your comment in this field."
        value={value}
        readOnly={readOnly}
        onChange={(event) => {
          if (readOnly) return;
          onChanged(event.target.value);
        }}
        className={styles.input}
      />
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}

function canSubmitProjectScore(projectScore: ProjectScore): boolean {
  const fields = [
    projectScore.idea,
    projectScore.impact,
    projectScore.function,
    projectScore.innovation,
    projectScore.differentiation,
  ];

  const fieldUnCompltete = find(fields, (field) => {
    return !field.comment || !field.score;
  });

  return !fieldUnCompltete;
}

declare type ViewProps = {
  projectId: number;
};

export default function _View({ projectId }: ViewProps) {
  const project = useAppSelector(selectProjectNomintateDetail(projectId));
  const dispatch = useAppDispatch();
  const [isForceValidate, setForceValidate] = useState(false);
  const projectScore = useAppSelector(selectProjectScoreDetail(projectId)) ?? {
    ...projectScopeEmpty,
    projectId,
  };
  const canEdit = projectScore.status != ProjectScoreStatus.SUBMITED;
  console.log("mylog can edit: ", canEdit, projectScore.status);

  const [isApprove, setApprove] = useState(true);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  // const [isValid, setIsValid] = useState<boolean>(false);
  const isValidate = true;
  function scoreValidator(score: number | undefined) {
    if (!isValidate) return "";
    return score === 0 ? "Please select a score." : "";
  }

  if (!project) return <div />;

  function aboutFieldValidator(text: string) {
    if (!isForceValidate) return "";
    return getProgressPercent(text) >= 10 ? "" : "This field is required!";
  }

  const canSubmit = isApprove && canEdit && canSubmitProjectScore(projectScore);

  const handleSubmit = () => {
    setForceValidate(true);
    if (canSubmit) {
      dispatch(submitProjectScore(projectScore));
    }
  };

  const onScoreChanged = (field: ProjectScoreField) => (value: number) => {
    dispatch(
      scoreBoardSlice.actions.projectScoreUpdated({
        ...projectScore,
        [field]: {
          ...projectScore[field],
          score: value,
        },
      })
    );
  };

  const onCommentChanged = (field: ProjectScoreField) => (value: string) => {
    dispatch(
      scoreBoardSlice.actions.projectScoreUpdated({
        ...projectScore,
        [field]: {
          ...projectScore[field],
          comment: value,
        },
      })
    );
  };

  return (
    <div key={projectId} className={styles.container}>
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
      <NumberSelector
        onSetScore={onScoreChanged("idea")}
        value={projectScore.idea.score}
        validator={scoreValidator}
        readOnly={!canEdit}
      />
      <InputAboutField
        value={projectScore.idea.comment}
        validator={aboutFieldValidator}
        onChanged={onCommentChanged("idea")}
        readOnly={!canEdit}
      />
      <AboutField
        disable={!canEdit}
        label="Impact"
        desc="What impactful criteria that project have met or exceeded, how the project benefits the society."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.impact}
        placeholder={project?.impact?.toString()}
      />
      <NumberSelector
        onSetScore={onScoreChanged("impact")}
        value={projectScore.impact.score}
        validator={scoreValidator}
        readOnly={!canEdit}
      />
      <InputAboutField
        value={projectScore.impact.comment}
        validator={aboutFieldValidator}
        onChanged={onCommentChanged("impact")}
        readOnly={!canEdit}
      />
      <AboutField
        disable={!canEdit}
        label="Differentiation"
        desc="What are the project USPs, how it can be a stand-out comparing to the others at the same category."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.differentiation}
        placeholder={project?.differentiation?.toString()}
      />
      <NumberSelector
        onSetScore={onScoreChanged("differentiation")}
        value={projectScore.differentiation.score}
        validator={scoreValidator}
        readOnly={!canEdit}
      />
      <InputAboutField
        value={projectScore.differentiation.comment}
        validator={aboutFieldValidator}
        onChanged={onCommentChanged("differentiation")}
        readOnly={!canEdit}
      />
      <AboutField
        disable={!canEdit}
        label="Function"
        desc="What is the usage of the project, how it benefits the user/ owner."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.function}
        placeholder={project?.function?.toString()}
      />
      <NumberSelector
        onSetScore={onScoreChanged("function")}
        value={projectScore.function.score}
        validator={scoreValidator}
        readOnly={!canEdit}
      />
      <InputAboutField
        value={projectScore.function.comment}
        validator={aboutFieldValidator}
        onChanged={onCommentChanged("function")}
        readOnly={!canEdit}
      />
      <AboutField
        disable={!canEdit}
        label="Innovation"
        desc="How was the project executed, what was innovated during the whole process."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.innovation}
        placeholder={project?.innovation?.toString()}
      />
      <NumberSelector
        onSetScore={onScoreChanged("innovation")}
        value={projectScore.innovation.score}
        validator={scoreValidator}
        readOnly={!canEdit}
      />
      <InputAboutField
        value={projectScore.innovation.comment}
        validator={aboutFieldValidator}
        onChanged={onCommentChanged("innovation")}
        readOnly={!canEdit}
      />
      <div style={{ height: 20 }} className={styles.completedBox} />
      <FormControlLabel
        className={styles.checkBox}
        disabled={!canEdit}
        control={
          <Checkbox
            checked={isApprove}
            onChange={(event) => setApprove(event.target.checked)}
          />
        }
        label="By confirming this statement, I hereby acknowledge that my evaluation for this project has been completed."
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
      <ModalSuccess isOpen={isSuccess} onSetIsOpen={setIsSuccess} />
    </div>
  );
}
