import { createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : 'user',
    initialState : {
       userInfo: {
        currentInfo : null, 
        message: null,
        pending: false,
        error: false,
       },
    }, 
    reducers : {
       updateStart: (state) => {
        state.userInfo.pending = true;
       },
       updateSuccess: (state,action) => {
        state.userInfo.pending = false;
        state.userInfo.error = false;
        state.userInfo.currentInfo = action.payload; 
       },
       updateMessage: (state,action) => {
         state.userInfo.message = action.payload;
       },
       updateLogout: (state) => {
         state.userInfo.currentInfo = null;
       },
       updateFailed: (state) =>{
        state.userInfo.pending = false;
        state.userInfo.error = true;
       },
    },
});

export const {updateStart, updateSuccess,updateMessage,updateLogout, updateFailed} = userSlice.actions;
export default userSlice.reducer;