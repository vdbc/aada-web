import { isEmpty, sum } from "lodash";
import { ProjectScoreBody } from "../services/ScoreService";

export function getProgressPercentField(value?: string) {
  const numOfWords = (value ?? "").trim().split(/\s+/).length;
  if (numOfWords <= 10) return 0;
  if (numOfWords <= 50) return 10;
  if (numOfWords <= 100) return 30;
  if (numOfWords <= 150) return 50;
  if (numOfWords <= 200) return 75;
  return 100;
}

export function canSubmitScore(score: ProjectScoreBody) {
  if (!score) return false;
  const commentFields = [
    score.idea.comment,
    score.impact.comment,
    score.differentiation.comment,
    score.function.comment,
    score.innovation.comment,
  ];
  for (let i = 0; i < commentFields.length; i++) {
    if (getProgressPercentField(commentFields[i]) < 0) return false;
  }
  const scoreFields = [
    score.idea.score,
    score.impact.score,
    score.differentiation.score,
    score.function.score,
    score.innovation.score,
  ];
  return true;
}
