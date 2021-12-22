import axios from "@/utils/axios";

export interface User {
  username: string;
  password: string;
}

export function GetUsers() {
  return axios.request({
    url: "/GetAllUser",
    method: "get"
  });
}

export function GetRoles() {
  return axios.request({
    url: "/SearchRole",
    method: "get"
  });
}

export function GetDepts() {
  return axios.request({
    url: "/SearchDepartment",
    method: "get"
  });
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
    url: "/GetUserById",
    method: "GET",
    params: {
      uid: userId
    }
  });
}

export function Logout() {
  return axios.request({
    url: "/logout",
    method: "get"
  });
}