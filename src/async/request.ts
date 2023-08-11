import http from "http";

export default function request<T>(url: string): Promise<T> {
  return new Promise((resolve) => {
    http.get({ path: url }, (response) => {
      let data = "";
      response.on("data", (_data) => (data += _data));
      response.on("end", () => resolve(data as T));
    });
  });
}
