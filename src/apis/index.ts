import axios from "@/utils/axios";

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

export function Logout() {
  return axios.request({
    url: "/logout",
    method: "get"
  });
}