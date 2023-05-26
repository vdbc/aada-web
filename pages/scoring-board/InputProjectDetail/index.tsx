import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProjectNominateStatus } from "../../../models/NominateModel";
import { store, useAppDispatch, useAppSelector } from "../../../store";
import nominateSlice, {
  fetchAllNominate,
  fetchProjectNominate,
  selectProjectNomintateDetail,
  selectProjectNomintateIds,
  submitProject,
} from "../../../store/modules/nominate";
import { TextInputValidator, ValueChanged } from "../../../utils/interface";
import {
  canSubmitProject,
  getProgressPercentField,
} from "../../../utils/project-nominate";
import { requiredValidator } from "../../../utils/validators";
import styles from "./styles.module.scss";
import SlideImage from "../SlideImage";
import { useRouter } from "next/router";
import { selectToken, selectUserId } from "../../../store/modules/user";
import ScoreSelector from "../ScoreSelector";
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

declare type Props = {
  onSetScore?: any;
};

function NumberSelector({ onSetScore }: Props) {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const numbers: number[] = [1, 2, 3, 4, 5];

  return (
    <div className={styles.inputAboutField}>
      <div className={styles.numberSelector}>
        {numbers.map((number) => (
          <button
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
        <p>You have selected {selectedNumber}</p>
      </div>
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
        <div className={styles.desc}>{descScore}</div>
      </div>
    </div>
  );
}
declare type InputAboutField = {
  value?: string;
  onChanged: ValueChanged<string>;
  disable: boolean;
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
  const projectIds = useAppSelector(selectProjectNomintateIds);
  const route = useRouter();
  const paramProjectId = parseInt(route.query["project"]?.toString() ?? "0");
  const activeProjectId = projectIds.includes(paramProjectId)
    ? paramProjectId
    : projectIds[0];
  const [selectedProjectId, setActiveProject] = useState(activeProjectId);
  const _selectedProjectId = selectedProjectId || projectIds[0];
  return (
    <div className={styles.inputAboutField}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <div className={styles.descAndOverview}>
        <div className={styles.desc}>{desc}</div>
      </div>
      <SlideImage projectId={_selectedProjectId} />
    </div>
  );
}

function InputAboutField({
  value,
  onChanged,
  disable,
  validator,
  onSetScore,
}: InputAboutField) {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectUserId);
  useEffect(() => {
    dispatch(fetchProjectNominate());
    dispatch(fetchAllNominate());
  }, [dispatch, userId]);
  const projectIds = useAppSelector(selectProjectNomintateIds);
  const route = useRouter();
  const paramProjectId = parseInt(route.query["project"]?.toString() ?? "0");
  const activeProjectId = projectIds.includes(paramProjectId)
    ? paramProjectId
    : projectIds[0];
  const [selectedProjectId, setActiveProject] = useState(activeProjectId);
  const _selectedProjectId = selectedProjectId || projectIds[0];
  const message = validator ? validator(value || "") : "";
  return (
    <div className={styles.inputAboutField}>
      <NumberSelector onSetScore={onSetScore} />
      <textarea
        placeholder="Please provide your comment in this field."
        disabled={disable}
        value={value || ""}
        onChange={(event) => onChanged(event.target.value)}
        className={styles.input}
      />
      {message && <div className={styles.errorMessage}>{message}</div>}
    </div>
  );
}

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
  const ideaSelect = useAppSelector(ideaSelector);
  const impactSelect = useAppSelector(impactSelector);
  const differentiationSelect = useAppSelector(differetiationSelector);
  const functionSelect = useAppSelector(functionSelector);
  const innovationSelect = useAppSelector(innovationSelector);
  if (!project) return <div />;

  function aboutFieldValidator(text: string) {
    if (!isForceValidate) return "";
    return getProgressPercentField(text) >= 30
      ? ""
      : "Please fill out at least 30% of this field before submitting.";
  }

  const canSubmit = isApprove && canSubmitProject(project);
  const handleSubmit = () => {
    const token = selectToken(store.getState());
    const data: ProjectScoreState = {
      idea: ideaSelect,
      impact: impactSelect,
      innovation: innovationSelect,
      differentiation: differentiationSelect,
      function: functionSelect,
    };
    postProjectScore(projectId, data, token);
  };
  return (
    <div key={project.id} className={styles.container}>
      <ViewGallery
        disable={!canEdit}
        label="Photo Gallery"
        desc="Maximum 10 photos submitted by Nominee."
        validator={aboutFieldValidator}
      />
      <AboutField
        disable={!canEdit}
        label="Idea"
        desc="How the project begins, how it achieves the origin of the idea."
        descScore="Please note that the scores should be placed by clicking the respective point."
        value={project.idea}
        placeholder={project?.idea?.toString()}
      />
      <InputAboutField
        disable={!canEdit}
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
        disable={!canEdit}
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
        disable={!canEdit}
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
        disable={!canEdit}
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
        disable={!canEdit}
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
        disabled={!canEdit}
        control={
          <Checkbox
            checked={canEdit ? isApprove : true}
            onChange={(event) => setApprove(event.target.checked)}
          />
        }
        label="By confirming this statement, I hereby acknowledge that my evaluation for this project has been completed."
      />
      <button className={styles.buttonSubmit} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
