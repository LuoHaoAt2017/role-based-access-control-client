import axios from "@/utils/axios";

export interface User {
  username: string;
  password: string;
}

export function Login({ username, password }: User) {
  return axios.request({
    url: "/login",
    method: "POST",
    data: {
      username,
      password,
    },
  });
}

export function Register({ username, password }: User) {
  return axios.request({
    url: "/register",
    method: "POST",
    data: {
      username,
      password,
    },
  });
}
