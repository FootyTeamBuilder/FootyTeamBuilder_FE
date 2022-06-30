import axios from "axios";
import { toast } from "react-toastify";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  loginMessage,
  registerFailed,
  registerStart,
  registerSuccess,
  logOutStart,
  logOutSuccess,
  logOutFailed
} from "./authSlice";
import { updateStart, updateSuccess,updateMessage,updateLogout ,updateFailed } from "./userSlice";
import { createStart, createSuccess, createFailed } from "./teamSlice";
export const login = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.config.data));
    dispatch(loginMessage(res.data));
    toast.success('Đăng nhập thành công');
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
    toast.error('Đăng nhập thất bại');
  }
};

export const register = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    console.log(res);
    toast.success('Đăng ký thành công');
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed());
    toast.error('Đăng ký thất bại');
  }
};

export const logOut = async (dispatch, id, navigate, accessToken, axiosJWT) => {
  dispatch(logOutStart());
  try {
    localStorage.clear();
    dispatch(logOutSuccess());
    dispatch(updateLogout());
    toast.success('Đăng xuất thành công');
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
    toast.error('Đăng xuất thất bại');
  }
};

export const updateInformation = async (userInfo, dispatch, token) => {
  dispatch(updateStart());
  try {
    const res = await axios.put("/user/edit-information", userInfo,{
      headers: {  Authorization: `Bearer ${token}`},
    });
    console.log(res);
    dispatch(updateSuccess(res.config.data));
    dispatch(updateMessage(res.data));
  } catch (error) {
    dispatch(updateFailed());
  }
}; 

export const createNewTeam = async (newTeam, dispatch, token) => {
  dispatch(createStart());
  try {
    const res = await axios.put("/team/create", newTeam,{
      headers: {  Authorization: `Bearer ${token}`},
    });
    console.log(res);
    dispatch(createSuccess(res.config.data));
  } catch (error) {
    dispatch(createFailed());
  }
}; 
