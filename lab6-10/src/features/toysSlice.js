import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null
}

const toysSlice = createSlice({
    name: "toys",
    initialState,
    reducers: {}
})

export default toysSlice.reducer;