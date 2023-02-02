import { deleteCookie, getCookie, setCookies } from "cookies-next";

const TOKEN_KEY = "token";
export function setToken(token?: string) {
  if (token == null || token === "") {
    deleteCookie(TOKEN_KEY);
  } else {
    setCookies(TOKEN_KEY, token);
  }
}

export function getToken(context?: any) {
  return getCookie(TOKEN_KEY, context)?.toString() || "";
}
