import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from '../slice/adminAuthSlice/AdminSlice'

export const store = configureStore({
    reducer: {
        Admin: AdminSlice
    }
})