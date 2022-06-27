import { createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name : 'user',
    initialState : {
       userInfo: {
        name: '',
        dateOfBirth:'',
        avatar: '',
        password: '',
        achivement: 0,
        phonenumber: '',
        email: '',
       },
       pending: false,
       error: false,
    }, 
    reducers : {
       updateStart: (state) => {
        state.pending = true;
       },
       updateSuccess: (state,action) => {
        state.pending = false;
        state.error = false;
        state.userInfo = action.payload;
       },
       updateFailed: (state) =>{
        state.pending = false;
        state.error = true;
       },
    },
});

export const {updateStart, updateSuccess, updateFailed} = userSlice.actions;
export default userSlice.reducer;