import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";


// Add category api
export const AddCategoryApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/product/api/addcategory`,data,header,"admin");
}

// get category api
export const GetCategoryApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/product/api/getcategory`,"",header,"admin");
}

// AddProductsApi api
export const AddProductsApi = async(data,categoryId,header)=>{
    return await commonrequest("POST",`${BASE_URL}/product/api/addproduct?categoryid=${categoryId}`,data,header,"admin");
}


// GetProductsApi api
export const GetProductsApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/product/api/getproducts?categoryid=${data.selectedcategory}&page=${data.page}`,"",header,"admin");
}

// GetLatestProductsApi api
export const GetLatestProductsApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/product/api/getlatestproducts`,"",header,"user");
}



// Delete Product 
export const DeleteProductApi = async(data,header)=>{
    return await commonrequest("DELETE",`${BASE_URL}/product/api/deleteproducts/${data.productid}`,{},header,"admin");
} 

// GetSingleProductApi api
export const GetSingleProductApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/product/api/getsingleproduct/${data.productid}`,"",header,"user");
}


// AddReviewApi api
export const AddReviewApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/product/api/productreview/${data.productid}`,data.data,header,"user");
}
