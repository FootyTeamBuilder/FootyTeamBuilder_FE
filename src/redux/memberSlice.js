import { createSlice } from "@reduxjs/toolkit";
const memberSlice = createSlice({
  name: "member",
  initialState: {
    memberInfo: {
      Info: null,
      message: null,
      pending: false,
      error: false,
    },
  }, 
  reducers: {
    createMemberStart: (state) => {
      state.memberInfo.pending = true;
    },
    createMemberSuccess: (state, action) => {
      state.memberInfo.pending = false;
      state.memberInfo.error = false;
      state.memberInfo.Info = JSON.parse(action.payload);
    },
    createMemberMessage: (state, action) => {
      state.memberInfo.message = action.payload;
    },
    createMemberLogout: (state) => {
      state.memberInfo.Info = null;
    },
    createMemberFailed: (state) => {
      state.memberInfo.pending = false;
      state.memberInfo.error = true;
    },
    updateMemberStart: (state) => {
      state.memberInfo.pending = true;
    },
    updateMemberSuccess: (state, action) => {
      state.memberInfo.pending = false;
      state.memberInfo.error = false;
      state.memberInfo.Info = JSON.parse(action.payload);
    },
    updateMemberMessage: (state, action) => {
      state.memberInfo.message = action.payload;
    },
    updateMemberFailed: (state) => {
      state.memberInfo.pending = false;
      state.memberInfo.error = true;
    },
    deleteMemberStart: (state) => {
      state.memberInfo.pending = true;
    },
    deleteMemberSuccess: (state, action) => {
      state.memberInfo.pending = false;
      state.memberInfo.error = false;
      state.memberInfo.Info = JSON.parse(action.payload);
    },
    deleteMemberMessage: (state, action) => {
      state.memberInfo.message = action.payload;
    },
    deleteMemberFailed: (state) => {
      state.memberInfo.pending = false;
      state.memberInfo.error = true;
    },
  },
});

export const {
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
} = memberSlice.actions;
export default memberSlice.reducer;
