import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "../Slices/UserDataSlice"

const Store = configureStore({
    reducer: {
        userdata: UserDataSlice
    }
})
export default Store