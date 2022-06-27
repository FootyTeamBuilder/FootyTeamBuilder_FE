import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
import { updateStart, updateSuccess, updateFailed } from "./userSlice";
export const login = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));

    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const register = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed());
  }
};

// export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
//   dispatch(logOutStart());
//   try {
//     await axiosJWT.post("/auth/logout", id, {
//       headers: { token: `Bearer ${accessToken}` },
//     });
//     dispatch(logOutSuccess());
//     navigate("/login");
//   } catch (err) {
//     dispatch(logOutFailed());
//   }
// };

export const updateInformation = async (userInfo, dispatch, token) => {
  dispatch(updateStart());
  try {
    const res = await axios.put("/user/edit-information",{
      headers: {  token: `Bearer ${token}`},
    },userInfo);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateFailed());
  }
}; 