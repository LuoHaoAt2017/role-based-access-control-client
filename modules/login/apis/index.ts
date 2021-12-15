import axios from "@/utils/axios";

export interface User {
  username: string;
  password: string;
}

export function login({ username, password }: User) {
  return axios.request({
    url: "/login",
    method: "POST",
    data: {
      username,
      password,
    },
  });
}
