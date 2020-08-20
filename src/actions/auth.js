// import React from "react";
import axios from "axios";
import { setTokenHeader } from "../header/api";

export const auth = async (userData) => {
  const { data } = await axios.post("/api/auth/signin", userData);
  return data;
};

export const onAuth = async (userData) => {
  localStorage.setItem("jwtToken", userData.token);
  setTokenHeader(userData.token);
  return userData;
};

export function logOut(clear) {
  localStorage.clear();
  setTokenHeader(false);
  clear({ isAuthenticated: false, user: {} });
}
