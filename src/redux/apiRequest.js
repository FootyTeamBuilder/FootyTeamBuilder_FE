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
  logOutFailed,
} from "./authSlice";
import {
  updateStart,
  updateSuccess,
  updateMessage,
  updateLogin,
  updateLogout,
  updateFailed,
} from "./userSlice";
import {
  createMemberStart,
  createMemberSuccess,
  createMemberMessage,
  createMemberLogout,
  createMemberFailed,
  updateMemberStart,
  updateMemberSuccess,
  updateMemberMessage,
  updateMemberFailed,
  deleteMemberStart,
  deleteMemberSuccess,
  deleteMemberMessage,
  deleteMemberFailed,
} from "./memberSlice";
import {
  createStart,
  createSuccess,
  createMessage,
  createFailed,
  editStart,
  editSuccess,
  editMessage,
  editFailed,
  logoutTeam,
} from "./teamSlice";
export const login = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    dispatch(updateLogin(res.data.data));
    toast.success("Đăng nhập thành công");
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
    toast.error("Đăng nhập thất bại");
  }
};

export const register = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
    console.log(res);
    toast.success("Đăng ký thành công");
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed());
    toast.error("Đăng ký thất bại");
  }
};

export const logOut = async (dispatch, navigate, id, accessToken, axiosJWT) => {
  dispatch(logOutStart());
  try {
    localStorage.clear();
    dispatch(logOutSuccess());
    dispatch(updateLogout());
    dispatch(logoutTeam())
    toast.success("Đăng xuất thành công");
    navigate("/login");
  } catch (err) {
    dispatch(logOutFailed());
    toast.error("Đăng xuất thất bại");
  }
};

export const updateInformation = async (userInfo, dispatch, token) => {
  dispatch(updateStart());
  try {
    const res = await axios.put("/user/edit-information", userInfo, {
      headers: { Authorization: `Bearer ${token}` },
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
      headers: { Authorization: `Bearer ${token}` } ,
    });
    console.log(res);
    dispatch(createSuccess(res.config.data));
    dispatch(createMessage(res.data));
  } catch (error) {
    dispatch(createFailed());
  }
};

export const editTeamInfo = async (teamInfo, dispatch, teamId, token) => {
  dispatch(editStart());
  try {
    const res = await axios.put(`/team/edit/${teamId}`, teamInfo, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    dispatch(editSuccess(res.config.data));
    dispatch(editMessage(res.data));
  } catch (error) {
    dispatch(editFailed());
  }
};

export const createMember = async (memberInfo, navigate,dispatch, teamId, token) => {
  dispatch(createMemberStart());
  try {
    const res = await axios.post(`/team/create-member/${teamId}`, memberInfo, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    dispatch(createMemberSuccess(res.config.data));
    dispatch(createMemberMessage(res.data));
    navigate(`/team-info/${teamId}`);
  } catch (error) {
    dispatch(createMemberFailed());
  }
};

export const viewMember = async (dispatch, memberId) => {
  dispatch(createMemberStart());
  try {
    const res = await axios.get(`/team/view-member/${memberId}`);
    console.log(res);
    dispatch(createMemberSuccess(res.config.data));
    dispatch(createMemberMessage(res.data));
  } catch (error) {
    dispatch(createMemberFailed());
  }
};

export const editMemberInfo = async (memberInfo,navigate ,dispatch, teamId,memberId, token) => {
  dispatch(updateMemberStart());
  try {
    const res = await axios.put(`/team/update-member/${teamId}/${memberId}`, memberInfo, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    dispatch(updateMemberSuccess(res.config.data));
    dispatch(updateMemberMessage(res.data));
    navigate(`/team-info/${teamId}`)
  } catch (error) {
    dispatch(updateMemberFailed());
  }
};

export const deleteMemberInfo = async (dispatch, teamId,memberId, token) => {
  dispatch(deleteMemberStart());
  try {
    const res = await axios.delete(`/team/delete-member/${teamId}/${memberId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    dispatch(deleteMemberSuccess(res.config.data));
    dispatch(deleteMemberMessage(res.data));
  } catch (error) {
    dispatch(deleteMemberFailed());
  }
};

export const viewTeam = async (dispatch, teamId) => {
  dispatch(createStart());
  try {
    const res = await axios.get(`/team/view-team/${teamId}`);
    console.log(res);
    dispatch(createSuccess(res.data.team));
  } catch (error) {
    dispatch(createFailed());
  }
};