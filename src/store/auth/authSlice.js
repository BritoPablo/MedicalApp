import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null,
    newUser: null,
    loading: false,
    user_loading: true,
    authError: false,
    errorAccountExist: null
  },

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
    authError: (state) => {
      state.authError= true;
    },
    errorAccountExist: (state) =>{
      state.errorAccountExist = true;
    },
    newUserCreated: (state,payload)=>{
      state.newUser = payload.payload
    }
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
  authError,
  errorAccountExist,
  newUserCreated
} = authSlice.actions;
