import { createSlice } from '@reduxjs/toolkit';
const teamSlice = createSlice({
    name: 'team',
    initialState: {
        newTeam: {
            teamInfo: null,
            messageTeam: null,
            pending: false,
            error: false
        },
        editTeam: {
            messageTeam: null,
            pendingEdit: false,
            error: false
        },
    },
    reducers: {
        createStart: (state) => {
            state.newTeam.pending = true;
        },
        createSuccess: (state, action) => {
            state.newTeam.pending = false;
            state.newTeam.error = false;
            state.newTeam.teamInfo = JSON.parse(action.payload);
        },
        createMessage: (state, action) => {
            state.newTeam.messageTeam = action.payload;
        },
        createFailed: (state) => {
            state.newTeam.pending = false;
            state.newTeam.error = true;
        },
        editStart: (state) => {
            state.editTeam.pendingEdit = true;
        },
        editSuccess: (state, action) => {
            state.editTeam.pendingEdit = false;
            state.editTeam.error = false;
            state.newTeam.teamInfo = JSON.parse(action.payload);
        },
        editMessage: (state, action) => {
            state.editTeam.messageTeam = action.payload;
        },
        editFailed: (state) => {
            state.editTeam.pendingEdit = false;
            state.editTeam.error = true;
        },
    },
});

export const { createStart, createSuccess, createMessage, createFailed,editStart, editSuccess, editMessage, editFailed } = teamSlice.actions;
export default teamSlice.reducer;