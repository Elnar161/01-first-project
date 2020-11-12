import Axios, { AxiosResponse } from "axios";
import { ProfileType, UserType } from "../types/types";

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodesCaptcha  {
    CaptchaIsRequired = 10
}


const instanseAxios = Axios.create(
    { withCredentials: true, 
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',  
      headers: { "API-KEY": '83927d7b-5045-4135-aced-5487d21ee72f'}})


export type ApiUserType = {
    id: number
    name: string
    status: string
    photos:{
        small: string | null
        large: string | null
    }
    followed: boolean
}     

export type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 20) {
        return (            
            instanseAxios.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    postFollow(userId: number) {
        return (
            instanseAxios.post<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
        )    
    },
    
    deleteFollow(userId: number){
        return (
            instanseAxios.delete<ResponseType>(`follow/${userId}`)
            .then(response => response.data)
        ) 
    },

    getProfile(userId: number) {        
        return profileAPI.getProfile(userId);
    }
}      

export const profileAPI = {
    getProfile(userId: number) {
        return (
            instanseAxios.get(`profile/${userId}`)
           // Axios.get(`${rootUrlAPI}/profile/${userId}`)
            .then(response => response.data)
        )
    },

    getStatus(userId: number) {
        return (
            instanseAxios.get(`profile/status/${userId}`)        
            .then(response => response.data)
        )
    },    

    updateStatus(status: string){
        return instanseAxios.put('profile/status', { status: status })
        .then(response => response.data)
    },
    
    savePhoto(photoFile: any){
        debugger;
        var formData = new FormData();
        formData.append("image", photoFile);

        return instanseAxios.put('profile/photo', formData, { 
            headers: {
                'Content-Type': 'multipart/form-data'
            }
         })
        .then(response => response.data)
    },

    saveProfile(profile: ProfileType){
        return instanseAxios.put('profile', profile)
        .then(response => response.data)
    }
}



export const authAPI = {
    getMe() {
        return (
            instanseAxios.get<MeResponseType>(`auth/me`)
                .then(response => response.data)
        )
    },

    logIn(email: string, password: string, rememberMe: boolean){
        return(
            instanseAxios.post<LogInResponseType>(`auth/login`, {
                email: email,
                password: password,
                rememberMe: rememberMe,
                captcha: true
            })
            .then(response => response.data)
        );
    },

    logOut(){
        return(
            instanseAxios.delete<ResponseType>(`auth/login`)
            .then(response => response.data)
        );
    }    
}



type MeResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}

type LogInResponseType = {
    resultCode: ResultCodesEnum | ResultCodesCaptcha
    messages: Array<string>
    data: {
        userId: number
    }
}

type ResponseType = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: any
}
