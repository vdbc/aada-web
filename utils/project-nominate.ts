import { sum } from "lodash";
import { ProjectNominate } from "../models/NominateModel";

export function getProgressPercentField(value?: string) {
  const numOfWords = (value ?? "").trim().split(/\s+/).length;
  if (numOfWords <= 10) return 0;
  if (numOfWords <= 50) return 10;
  if (numOfWords <= 100) return 30;
  if (numOfWords <= 150) return 50;
  if (numOfWords <= 200) return 75;
  return 100;
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
