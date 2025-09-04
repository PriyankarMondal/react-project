import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countNum: 0,
};

const CountSlice = createSlice({
    name: "countSlice",
    initialState,
    reducers: {
        CountNum: (state, action) => {
            state.countNum = action.payload || 0;
        },
    },
});

export const {
    CountNum,
} = CountSlice.actions;

export default CountSlice.reducer;