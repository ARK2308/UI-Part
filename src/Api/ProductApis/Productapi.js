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
    return await commonrequest("POST",`${BASE_URL}/product/api/addProduct?categoryid=${categoryId}`,data,header,"admin");
}