import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";

// add to cart api
export const AddtoCartApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/carts/api/addtocart/${data}`,{},header,"user");
}