import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AdminLoginApi }  from "../../../Api/AdminApis/adminapi";

export const AdminAuthLogin = createAsyncThunk("AdminLogin", async (data) => {
  try {
    const response = await AdminLoginApi(data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

// crreate reducer and action
export const AdminSlice = createSlice({
  name: "AdminSlice",
  initialState: {
    adminlogin: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // Admin Login
    builder.addCase(AdminAuthLogin.pending, (state) => {
      state.loading = true;
    })
    .addCase(AdminAuthLogin.fulfilled,(state,action)=>{
        state.loading = false;
        state.adminlogin = action.payload;
    })
    .addCase(AdminAuthLogin.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    })
  },
});


export default AdminSlice.reducer;
