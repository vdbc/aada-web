import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import InputField from "../../../components/InputField";
import ProgressBar from "../../../components/ProgressBar";
import { useAppDispatch, useAppSelector } from "../../../store";
import nominateSlice, {
  selectProjectNomintateDetail,
} from "../../../store/modules/nominate";
import { ValueChanged } from "../../../utils/interface";
import { getProgressPercentField } from "../../../utils/project-nominate";
import InputImages from "../InputImages";
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

declare type InputAboutField = {
  label: string;
  desc: string;
  required?: boolean;
  value?: string;
  recommendLength?: number;
  onChanged: ValueChanged<string>;
};

function InputAboutField({
  label,
  desc,
  value,
  onChanged,
  required = true,
  recommendLength = 300,
}: InputAboutField) {
  const percent = getProgressPercentField(value);
  return (
    <div className={styles.inputAboutField}>
      <div className={styles.label}>{label + (required ? "*" : "")}</div>
      <textarea
        value={value}
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
    </div>
  );
}

declare type ViewProps = {
  projectId: number;
};

export default function _View({ projectId }: ViewProps) {
  const project = useAppSelector(selectProjectNomintateDetail(projectId));
  const dispatch = useAppDispatch();

  if (!project) return <div />;

  return (
    <div className={styles.container}>
      <InputField
        className={styles.inputField}
        label="Your Entry Name"
        placeholder="Please type your entry name"
        value={project.name}
        onChanged={(name) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              name,
            })
          )
        }
        required
      />
      <InputField
        prefix={<SelectLocale />}
        className={styles.inputField}
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
        required
      />
      <h3>Tell Us About Your Project</h3>
      <InputAboutField
        label="Idea"
        desc="How the project begins, how it achieves the origin of the idea."
        value={project.idea}
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
        label="Impact"
        desc="What impactful criteria that project have met or exceeded, how the project benefits the society."
        value={project.impact}
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
        label="Differentiation"
        desc="What are the project USPs, how it can be a stand-out comparing to the others at the same category."
        value={project.differentiation}
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
        label="Function"
        desc="What is the usage of the project, how it benefits the user/ owner."
        value={project.function}
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
        label="Innovation"
        desc="How was the project executed, what was innovated during the whole process."
        value={project.innovation}
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
        className={styles.inputField}
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
        required
      />
      <InputField
        className={styles.inputField}
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
        required
      />
      <InputField
        className={styles.inputField}
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
        required
      />
      <InputImages
        label="Your projects photo gallery*"
        value={project.pictures}
        onChanged={(pictures) =>
          dispatch(
            nominateSlice.actions.projectUpdated({
              ...project,
              pictures,
            })
          )
        }
      />
    </div>
  );
}
