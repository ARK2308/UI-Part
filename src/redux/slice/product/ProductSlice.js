import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddCategoryApi, AddProductsApi, GetCategoryApi, GetProductsApi } from "../../../Api/ProductApis/Productapi";
import { toast } from "react-hot-toast";




// Admin AdminAddCategory Slice
export const AdminAddCategory = createAsyncThunk(
  "AdminAddCategory",
  async (data) => {
    try {
      const response = await AddCategoryApi(data);

      if (response.status == 200) {
        toast.success("Category Succesfully Added!");

        return response.data;
      } else {
        toast.error(response.response.data.error);
      }
    } catch (error) {
      throw error;
    }
  }
);

// GetCategory Slice
export const getCategory = createAsyncThunk("getCategory",async(thunkApi)=>{
    try {
        const response = await GetCategoryApi();

        if(response.status == 200){
            
            return response.data
        }else{
            // toast.error(response.response.data.error);
            return thunkApi.rejectWithValue("error");
        }
    } catch (error) {
        throw error;
    }
});


// Add Product Slice
export const AddProductsslice = createAsyncThunk("AddProducts",async(data)=>{
  try {
      const response = await AddProductsApi(data.data,data.categoryId,data.config);

      if(response.status == 200){
          toast.success("Product Added")
          return response.data
      }else{
          toast.error(response.response.data.error);
         
      }
  } catch (error) {
      throw error;
  }
});



// get Product Slice
export const getAllProducts = createAsyncThunk("getAllProducts",async(data)=>{
  try {
      const response = await GetProductsApi(data);

      if(response.status == 200){
          return response.data
      }else{
          toast.error(response.response.data.error);
         
      }
  } catch (error) {
      throw error;
  }
});






// crreate reducer and action
export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    addCategoryData: [],
    CategoryData:[],
    AddProducts:[],
    ProductsData:[],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
     // Admin AdminAddCategory
     builder.addCase(AdminAddCategory.pending,(state)=>{
        state.loading = true;
    })
    .addCase(AdminAddCategory.fulfilled,(state,action)=>{
        state.loading = false;
        state.addCategoryData = action.payload;
    })
    .addCase(AdminAddCategory.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    })

    
        // getcategory
        .addCase(getCategory.pending,(state)=>{
            state.loading = true;
        })
        .addCase(getCategory.fulfilled,(state,action)=>{
            state.loading = false;
            state.CategoryData = action.payload;
        })
        .addCase(getCategory.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })

          // AddProductsslice
          .addCase(AddProductsslice.pending,(state)=>{
            state.loading = true;
        })
        .addCase(AddProductsslice.fulfilled,(state,action)=>{
            state.loading = false;
            state.AddProducts = action.payload;
        })
        .addCase(AddProductsslice.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
         // getAllProducts slice
         .addCase(getAllProducts.pending,(state)=>{
          state.loading = true;
      })
      .addCase(getAllProducts.fulfilled,(state,action)=>{
          state.loading = false;
          state.ProductsData = action.payload;
      })
      .addCase(getAllProducts.rejected,(state,action)=>{
          state.loading = false;
          state.error = action.payload;
      })

  },
});

export default ProductSlice.reducer;
