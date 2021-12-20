import axios from "@/utils/axios";

export interface User {
  username: string;
  password: string;
}

export function GetSciencesMember() {
  return axios.request({
    url: "/sciences-member",
    method: "get"
  });
}

export function GetEngineerMember() {
  return axios.request({
    url: "/engineer-member",
    method: "get"
  });
}

export function GetUserInfo(userId: string) {
  return axios.request({
    url: "/user",
    method: "GET",
    params: {
      userId: userId
    }
  });
}

export function Logout() {
  return axios.request({
    url: "/logout",
    method: "get"
  });
}