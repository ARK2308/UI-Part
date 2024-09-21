import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";

// add to cart api
export const AddtoCartApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/carts/api/addtocart/${data}`,{},header,"user");
}


// GetUserCartApi api
export const GetUserCartApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/carts/api/getcarts`,"",header,"user");
}