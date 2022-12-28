import { configureStore } from "@reduxjs/toolkit";
import commercialsSlice from "./commercialsSlice";

export const store = configureStore({
    reducer: {
        records: commercialsSlice
    },
})