import { createSlice } from "@reduxjs/toolkit";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_CONFIRM_SUCCESS,
  RESET_PASSWORD_CONFIRM_FAIL,
  SET_AUTH_LOADING,
  REMOVE_AUTH_LOADING,
  LOGOUT,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  REFRESH_SUCCESS,
  REFRESH_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
} from "./types";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null,
    loading: false,
    user_loading: true,
  },

  /*
  initialState: {
    status: "checking", // 'checking', not-authenticated , 'authtenticated'
    email: null,
    id: null,
    first_name: null,
    last_name: null,
    is_active: false,
    is_editor: false,
    is_staff: false,
    errorMessage: null,
    access: null,
    refresh: null,
  }, */
  /*
  reducers: {
    load_tokens: (state, action) => {
      state.access = action.payload.access;
      state.refresh = action.payload.access;
    },
    setStatus: (state, action) => {
      state.status = `${action.payload}`;
    },
    load_user_data: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.is_active = action.payload.is_active;
      state.is_editor = action.payload.is_editor;
      state.is_staff = action.payload.is_staff;
    },
  },*/
  reducers: {
    setAuthLoading: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, payload) => {
      localStorage.setItem("access", payload.payload.access);
      localStorage.setItem("refresh", payload.payload.refresh);
      state.isAuthenticated = true;
      state.access = localStorage.getItem("access");
      state.refresh = localStorage.getItem("refresh");
    },
    removeAuthLoading: (state) => {
      state.loading = false;
    },
    removeUserData: (state) => {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      state.access = null;
      state.refresh = null;
      state.isAuthenticated = false;
      state.user = null;
    },
    userLoadSuccess: (state, payload) => {
      state.user = payload.payload;
      state.user_loading = false;
      state.isAuthenticated = true;
    },
    userLoadFail: (state) => {
      state.user = null;
      state.user_loading = false;
    },
    authenticatedSuccess: (state) => {
      state.isAuthenticated = true;
    },
    refreshSuccess: (state, payload)=>{
      localStorage.setItem("access", payload.payload.access);
      state.access = localStorage.getItem("access");
    },
    checkAuthFail: (state)=>{
      state.loading = false;
    },
  },
});
export const {
  setAuthLoading,
  loginSuccess,
  removeAuthLoading,
  removeUserData,
  userLoadSuccess,
  userLoadFail,
  authenticatedSuccess,
  refreshSuccess,
  checkAuthFail,
} = authSlice.actions;
