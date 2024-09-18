import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { registerApi } from "../../../Api/UserApis/userApi";




// user registerSlice
export const UserRegister = createAsyncThunk("UserRegister",async(data)=>{
    try {
        const response = await registerApi(data.data,data.config);

        if(response.status == 200){
            toast.success("User Succesfully Registerd!")
            
            return response.data
        }else{
            toast.error(response.response.data.error);
        }
    } catch (error) {
        throw error;
    }
});

















// create reducer and action
export const UserSlice = createSlice({
    name:"UserSlice",
    initialState:{
        getAlluserData:[],
        loading:false,
        error:null
    },
    extraReducers:(builder)=>{
        // user register
        builder.addCase(UserRegister.pending,(state)=>{
            state.loading = true;
        })
        .addCase(UserRegister.fulfilled,(state,action)=>{
            state.loading = false;
            state.registeruser = action.payload;
        })
        .addCase(UserRegister.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default UserSlice.reducer;