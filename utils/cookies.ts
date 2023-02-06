import { deleteCookie, getCookie, setCookie } from "cookies-next";

let cookieContext: any;

export function setCookieContext(context: any) {
  cookieContext = context;
}

const TOKEN_KEY = "token";
export function setToken(token?: string) {
  if (token == null || token === "") {
    deleteCookie(TOKEN_KEY, cookieContext);
  } else {
    setCookie(TOKEN_KEY, token, cookieContext);
  }
}

export function getToken(context?: any) {
  return getCookie(TOKEN_KEY, context || cookieContext)?.toString() || "";
}
