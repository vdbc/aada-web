import { isEmpty, sum } from "lodash";
import {
  ProjectNominate,
  ProjectNominateStatus,
} from "../models/NominateModel";

export function getProjectName(project: ProjectNominate) {
  return project?.name ?? `Project ${project?.id ?? "--"}`;
}

export function getProgressPercentField(value?: string) {
  const numOfWords = (value ?? "").trim().split(/\s+/).length;
  if (numOfWords <= 10) return 0;
  if (numOfWords <= 50) return 10;
  if (numOfWords <= 100) return 30;
  if (numOfWords <= 150) return 50;
  if (numOfWords <= 200) return 75;
  return 100;
}

export function canSubmitProject(project: ProjectNominate) {
  if (!project) return false;
  if (project.status == ProjectNominateStatus.SUBMITED) return;
  const fields = [
    project.name,
    project.country,
    project.location,

    project.designer,
    project.manufacturer,
    project.owner,
    project.pictures,
  ];
  for (let i = 0; i < fields.length; i++) {
    if (isEmpty(fields[i])) return false;
  }
  const aboutFields = [
    project.idea,
    project.impact,
    project.differentiation,
    project.function,
    project.innovation,
  ];
  for (let i = 0; i < aboutFields.length; i++) {
    if (getProgressPercentField(aboutFields[i]) < 30) return false;
  }
  return true;
}

export function getOverviewProgressPercent(project: ProjectNominate) {
  if (project == null) return 0;
  const requiredFields = [
    project.name,
    project.location,
    project.designer,
    project.manufacturer,
    project.owner,
  ];
  const totalRequiredFieldPercent = sum(requiredFields.map(getRequiredPercent));
  const aboutFields = [
    project.idea,
    project.impact,
    project.function,
    project.differentiation,
    project.innovation,
  ];
  const totalAboutFieldPercent = sum(aboutFields.map(getProgressPercentField));
  const picturesLength = project?.pictures?.length ?? 0;
  const picturesPercent = picturesLength > 0 ? 100 : 0;
  return (
    (totalAboutFieldPercent + totalRequiredFieldPercent + picturesPercent) /
    (requiredFields.length + aboutFields.length + 1)
  );
}

function getRequiredPercent(value: string): number {
  const text = (value ?? "").trim();
  if (text.length > 0) return 100;
  return 0;
}

export function isCompleteProject(project: ProjectNominate): boolean {
  if (!project) return false;
  const fields = [
    project.name,
    project.location,
    project.designer,
    project.manufacturer,
    project.owner,
    project.idea,
    project.impact,
    project.function,
    project.differentiation,
    project.innovation,
  ];
  for (const value in fields) {
    if (!value) return false;
    if (value.trim().length == 0) return false;
  }
  if ((project?.pictures?.length ?? 0) == 0) return false;

  return true;
}
