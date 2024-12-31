import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const FetchUserData = createAsyncThunk("FetchUserData", async (_, { rejectedvalue }) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log("Data -", response.data)
        return response?.data

    } catch (error) {
        console.log("Error while fetching data", error)
        rejectedvalue(error.message)
    }
})