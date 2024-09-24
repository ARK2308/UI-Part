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

// resetpasswordApi api
export const resetpasswordApi = async(data,header)=>{
    return await commonrequest("PUT",`${BASE_URL}/userAuth/api/resetpassword/${data.id}/${data.token}`,data.passworddata,header,"user");
}


// getAlluserApi api
export const getAlluserApi = async(data,header)=>{
    return await commonrequest("GET",`${BASE_URL}/userAuth/api/getAlluser?page=${data.page}`,"",header,"admin");
}

// DeleteuserApi api
export const DeleteuserApi = async(data,header)=>{
    return await commonrequest("DELETE",`${BASE_URL}/userAuth/api/userdelete/${data.userid}`,{},header,"admin");
}

// usercontactApi api
export const usercontactApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/userAuth/api/usercontact`,data,header,"user");
}


