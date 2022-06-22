import axios from "axios";
import { toast } from "react-toastify";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
  logOutStart,
  logOutSuccess,
  logOutFailed
} from "./authSlice";

export const login = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
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
    await axios.post("/auth/register", user);
    dispatch(registerSuccess());
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
    toast.success('Đăng xuất thành công');
    // navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
    toast.error('Đăng xuất thất bại');
  }
};
