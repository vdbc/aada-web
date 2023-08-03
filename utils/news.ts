import { NewsModel, WinnerNewsModel } from "../models/NewsModel";

export function getNewsFlugId(news: NewsModel) {
  const { id, title = "" } = news;

  return title.trim().replace(/\s+/g, "_").replaceAll(/\W/g, "") + "-tid" + id;
}
export function getNewsIdFromFlug(flugId: string) {
  const match = flugId.match(/(-tid(\w+))$/);
  return match?.at(2) || flugId;
}


export function getWinnersFlugId(winners: WinnerNewsModel) {
  const { id, projectName = "" } = winners;
  return projectName.trim().replace(/\s+/g, "_").replaceAll(/\W/g, "") + "-tid" + winners.id;
}

export function getWinnersIdFromFlug(flugIdwinner: string) {
  const match = flugIdwinner.match(/(-tid(\w+))$/);
  return match?.at(2) || flugIdwinner;
}
