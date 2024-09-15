import { BASE_URL } from "../helper";
import { commonrequest } from "../Commonrequest";


// admin register api
export const AdminregisterApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/api/register`,data,header,"admin");
}

// admin Login Api
export const AdminLoginApi = async(data,header)=>{
    return await commonrequest("POST",`${BASE_URL}/api/login`,data,header,"admin");
}

// admin AdminLoggedIn Api
export const AdminLoggedInApi = async(header)=>{
    return await commonrequest("GET",`${BASE_URL}/api/adminverify`,"",header,"admin");
}

// admin AdminLogout Api
export const AdminLogoutApi = async(header)=>{
    return await commonrequest("GET",`${BASE_URL}/api/logout`,"",header,"admin");
}
