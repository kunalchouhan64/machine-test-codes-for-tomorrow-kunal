import { createSlice } from "@reduxjs/toolkit";
import { FetchUserData } from "../AsyncThunks/FetchUserData";

const UserDataSlice = createSlice({
    name: "userdata",
    initialState: {
        isLoading: false,
        isError: null,
        items: [],
        defaultview: "card",
        isFormEnabled: false
    },
    reducers: {
        toggleview: (state, action) => {
            state.defaultview = action.payload
        },
        toggleform: (state, action) => {
            state.isFormEnabled = action.payload
        },
        removecard: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FetchUserData.pending, (state) => {
            state.isLoading = true;
        }).addCase(FetchUserData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = null;
            state.items = action.payload;
        }).addCase(FetchUserData.rejected, (state, action) => {
            state.isError = action.payload
        })
    }
})
export const { toggleview, toggleform, removecard } = UserDataSlice.actions
export default UserDataSlice.reducer