import { createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : 'user',
    initialState : {
       userInfo: {
        currentInfo : null, 
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
       updateFailed: (state) =>{
        state.userInfo.pending = false;
        state.userInfo.error = true;
       },
    },
});

export const {updateStart, updateSuccess, updateFailed} = userSlice.actions;
export default userSlice.reducer;