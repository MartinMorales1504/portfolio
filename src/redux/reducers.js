import { createSlice } from "@reduxjs/toolkit";

const main = createSlice({
    name: 'reducer',
    initialState: {
        joined: false
    },
    reducers: {
        setJoined: (state) => {
            return {
                ...state,
                joined: true,
            }
        }
    }
})

export const {
    setJoined,
    setNight,
    setMenu
} = main.actions;

export default main.reducer;