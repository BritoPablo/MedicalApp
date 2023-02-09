import axios from "axios";
import { configEnv } from "../../../configEnv";
import {
  setAuthLoading,
  loginSuccess,
  removeAuthLoading,
  userLoadSuccess,
  userLoadFail,
  authenticatedSuccess,
  removeUserData,
  refreshSuccess,
  checkAuthFail,
  authError,
  errorAccountExist,
  newUserCreated,
  activateAccountError
} from "./";

export const login = (email, password) => async (dispatch) => {
  dispatch(setAuthLoading());
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const res = await axios.post(
      `${configEnv.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );
    if (res.status === 200) {
      //console.log('status 200',res.data)
      dispatch(loginSuccess(res.data));
      dispatch(load_user());
      dispatch(removeAuthLoading());
    } else if(res.status === 401){
      dispatch(activateAccountError())
      dispatch(removeAuthLoading());
    } else {
      dispatch(authError())
      dispatch(removeAuthLoading());
    }
  } catch (err) {
    if(err.response.status === 401){
      dispatch(authError())
      dispatch(activateAccountError())
      dispatch(removeAuthLoading());
    } else {
    dispatch(authError())
    dispatch(removeAuthLoading());
    }
  }
};

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const res = await axios.get(
        `${configEnv.REACT_APP_API_URL}/auth/users/me/`,
        config
      );

      if (res.status === 200) {
        dispatch(userLoadSuccess(res.data));
      } else {
        dispatch(userLoadFail());
      }
    } catch (err) {
      dispatch(userLoadFail());
    }
  }
};

export const check_authtenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      token: localStorage.getItem("access"),
    });

    try {
      const res = await axios.post(
        `${configEnv.REACT_APP_API_URL}/auth/jwt/verify`,
        body,
        config
      );

      if (res.status === 200) {
        dispatch(authenticatedSuccess());
      } else {
        console.log("Remove 1");
        dispatch(checkAuthFail());
      }
    } catch (err) {
      console.log("Remove 2");
      dispatch(checkAuthFail());
    }
  } else {
    console.log("Remove 3");
    dispatch(checkAuthFail());
  }
};

export const refresh = () => async (dispatch) => {
  if (localStorage.getItem("refresh")) {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      refresh: localStorage.getItem("refresh"),
    });

    try {
      const res = await axios.post(
        `${configEnv.REACT_APP_API_URL}/auth/jwt/refresh`,
        body,
        config
      );
      if (res.status === 200) {
        dispatch(refreshSuccess(res.data));
      } else {
        console.log("Remove 4");
        dispatch(checkAuthFail());
      }
    } catch (err) {
      console.log("Remove 5", err);
      dispatch(checkAuthFail());
    }
  } else {
    console.log("Remove 6");
    dispatch(checkAuthFail());
  }
};

export const reset_password = (email) => async (dispatch) => {
  dispatch(setAuthLoading());
  const config = {
    heraders: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    email,
  });
  try {
    const res = await axios.post(
      `${configEnv.REACT_APP_API_URL}/auth/jwt/users/reset_password`,
      body,
      config
    );
    if (res.status === 204) {
      dispatch(removeAuthLoading());
    } else {
      dispatch({
        type: RESET_PASSWORD_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
    });
    dispatch(removeAuthLoading());
  }
};

export const reset_password_confirm =  (uid, token, new_password, re_new_password) => async (dispatch) => {
    dispatch(setAuthLoading());
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      uid,
      token,
      new_password,
      re_new_password,
    });

    if (new_password !== re_new_password) {
      dispatch({
        type: RESET_PASSWORD_CONFIRM_FAIL,
      });
      dispatch(removeAuthLoading());
    } else {
      try {
        const res = await axios.post(
          `${configEnv.REACT_APP_API_URL}/auth/users/reset_password`,
          body,
          config
        );
        if (res.status === 204) {
          dispatch({
            type: RESET_PASSWORD_CONFIRM_SUCCESS,
          });
          dispatch(removeAuthLoading());
        } else {
          dispatch({
            type: RESET_PASSWORD_CONFIRM_FAIL,
          });
          dispatch(removeAuthLoading());
        }
      } catch (err) {
        dispatch({
          type: RESET_PASSWORD_CONFIRM_FAIL,
        });
        dispatch(removeAuthLoading());
      }
    }
  };

export const logout = () => (dispatch) => {
  dispatch(removeUserData());
};

export const register =  (first_name, last_name, email, password, passwordCheck) =>
  async (dispatch) => {
    dispatch(setAuthLoading());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const body = JSON.stringify({
        email,
        first_name,
        last_name,
        password,
        re_password: passwordCheck
    });

    try {
      const res = await axios.post(
        `${configEnv.REACT_APP_API_URL}/auth/users/`,body, config);
      if (res.status === 201) {
        dispatch(newUserCreated(res.data))
        dispatch(removeAuthLoading());
      } else if(res.status === 400) {
        dispatch(errorAccountExist())
        dispatch(removeAuthLoading());
      } else {
        
        dispatch(authError())
        dispatch(removeAuthLoading());
      }
    } catch (err) {
      if(err.response.status === 400) {
        dispatch(errorAccountExist())
        dispatch(removeAuthLoading());
      } else{
        dispatch(authError())
        dispatch(removeAuthLoading());
      }
    }
  };
