import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";

export const registerApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/userAuth/api/register`,data,header,"user");
}


// user loginApi api
export const loginApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/userAuth/api/login`,data,header,"user");
}


// user veryfy api
export const userLoggedInApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/userAuth/api/userloggedin`,"",header,"user");
}


// userLogoutApi api
export const userLogoutApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/userAuth/api/logout`,"",header,"user");
}


// forgotpasswordApi api
export const forgotpasswordApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/userAuth/api/forgotpassword`,data,header,"user");
}
// forgotpasswordverifyApi api
export const forgotpasswordverifyApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/userAuth/api/forgotpassword/${data.id}/${data.token}`,"",header,"user");
}