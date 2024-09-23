import { configureStore } from "@reduxjs/toolkit";
import AdminSlice from '../slice/adminAuthSlice/AdminSlice'
import ProductSlice from "../../redux/slice/product/ProductSlice";
import UserSlice from "../../redux/slice/userAuthSlice/userAuthSlice"
import PaymentSlice from "../slice/paymentslice/PaymentSlice";

export const store = configureStore({
    reducer: {
        Admin: AdminSlice,
        Product: ProductSlice ,
        User: UserSlice ,
        Payment: PaymentSlice
    }
})