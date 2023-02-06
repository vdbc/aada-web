import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

function wrapRequest<T>(request: Promise<AxiosResponse<any, any>>): Promise<T> {
  return request
    .then((resp) => resp.data)
    .catch((err: AxiosError) => {
      throw err.response?.data || err;
    });
}
export function get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
  return wrapRequest(axios.get(url, options));
}
export function post<T>(
  url: string,
  data?: any,
  options?: AxiosRequestConfig
): Promise<T> {
  return wrapRequest(axios.post(url, data, options));
}
export function put<T>(
  url: string,
  data?: any,
  options?: AxiosRequestConfig
): Promise<T> {
  return wrapRequest(axios.put(url, data, options));
}
