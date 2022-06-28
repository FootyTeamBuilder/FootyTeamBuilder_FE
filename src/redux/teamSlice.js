import { createSlice} from '@reduxjs/toolkit';

export const teamSlice = createSlice({
    name : 'team',
    initialState : {
        newTeam : {
            messageTeam : null,
            pending: false,
            error: false,
        },
    },
    reducers : {
        createStart : (state) => {
            state.newTeam.pending = true;
        },
        createSuccess : (state,action) => {
            state.newTeam.pending = false;
            state.newTeam.error = false;
            state.newTeam.messageTeam = action.payload;
        },
        createFailed : (state) => {
            state.newTeam.pending = false;
            state.newTeam.error = true;
        },
    },
});

export const {createStart, createSuccess, createFailed} = teamSlice.actions;
export default teamSlice.reducer;