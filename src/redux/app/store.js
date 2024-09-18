import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from '../slice/adminAuthSlice/AdminSlice'
import ProductSlice from "../../redux/slice/product/ProductSlice";
import UserSlice from "../../redux/slice/userAuthSlice/userAuthSlice"

export const store = configureStore({
    reducer: {
        Admin: AdminSlice,
        Product: ProductSlice ,
        User: UserSlice 
    }
})