import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { forgotpasswordApi, forgotpasswordverifyApi, loginApi, registerApi, resetpasswordApi, userLoggedInApi, userLogoutApi } from "../../../Api/UserApis/userApi";




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



// userlogin  Slice
export const userlogin = createAsyncThunk("userlogin",async(data)=>{
    try {
        const response = await loginApi(data);
        

        if(response.status == 200){
            localStorage.setItem("usertoken",response.data.token);
            toast.success("User Succesfully Login!")
            
            return response.data
        }else{
            toast.error(response.response.data.error);
        }
    } catch (error) {
        throw error;
    }
});

// userVerify  Slice
export const userVerify = createAsyncThunk("userVerify",async(thunkApi)=>{
    try {
        const response = await userLoggedInApi();
        console.log("response",response);
        

        if(response.status == 200){
            
            return response.data
        }else{
            return thunkApi.rejecWithValue("error")
        }
    } catch (error) {
        throw error;
    }
});


// uselogoutfun  Slice
export const uselogoutfun = createAsyncThunk("uselogoutfun",async(thunkApi)=>{
    try {
        const response = await userLogoutApi();
        

        if(response.status == 200){
            toast.success("User Logout Done")
            localStorage.removeItem("usertoken")
            return response.data
        }else{
            toast.success("User Logout Done")
            localStorage.removeItem("usertoken")
            return thunkApi.rejectWithValue("error");
        }
    } catch (error) {
        throw error;
    }
});

// forgotpassword  Slice
export const forgotpassword = createAsyncThunk("forgotpassword",async(data)=>{
    try {
        const response = await forgotpasswordApi(data);
       

        if(response.status == 200){
            toast.success("Password Reset Link Send In Your Email Please Check")
           
            return response.data
        }else{
            toast.error("Invalid details")
            
            
        }
    } catch (error) {
        throw error;
    }
});

// forgotpasswordvalid  Slice
export const forgotpasswordvalid = createAsyncThunk("forgotpasswordvalid",async(data)=>{
    try {
        const response = await forgotpasswordverifyApi(data);


        if(response.status == 200){
            return response.data
        }else{
            toast.error("Your Link Expired, Please Generate New Link")
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
        loginuser:[],
        UserLoggedIn:[],
        UserLogout:[],
        forgotpasswordsend:[],
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

           // user login
           .addCase(userlogin.pending,(state)=>{
            state.loading = true;
        })
        .addCase(userlogin.fulfilled,(state,action)=>{
            state.loading = false;
            state.loginuser = action.payload;
        })
        .addCase(userlogin.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        // user verify Api
        .addCase(userVerify.pending,(state)=>{
            state.loading = true;
        })
        .addCase(userVerify.fulfilled,(state,action)=>{
            state.loading = false;
            state.UserLoggedIn = [action.payload];
        })
        .addCase(userVerify.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        
        // uselogoutfun Api
        .addCase(uselogoutfun.pending,(state)=>{
            state.loading = true;
        })
        .addCase(uselogoutfun.fulfilled,(state,action)=>{
            state.loading = false;
            state.UserLogout = [action.payload];
            state.UserLoggedIn = [];
            state.userCartData = [];
        })
        .addCase(uselogoutfun.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

           // forgotpassword Api
           .addCase(forgotpassword.pending,(state)=>{
            state.loading = true;
        })
        .addCase(forgotpassword.fulfilled,(state,action)=>{
            state.loading = false;
            state.forgotpasswordsend = action.payload;
           
        })
        .addCase(forgotpassword.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

        
        // forgotpasswordvalid Api
        .addCase(forgotpasswordvalid.pending,(state)=>{
            state.loading = true;
        })
        .addCase(forgotpasswordvalid.fulfilled,(state,action)=>{
            state.loading = false;
            state.forgotpasswordverifyData = action.payload;
           
        })
        .addCase(forgotpasswordvalid.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })


    }
});

export default UserSlice.reducer;