import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from '../slice/adminAuthSlice/AdminSlice'
import ProductSlice from "../../redux/slice/product/ProductSlice";

export const store = configureStore({
    reducer: {
        Admin: AdminSlice,
        Product: ProductSlice 
    }
})