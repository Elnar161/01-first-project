import Axios from "axios";

const instanseAxios = Axios.create(
    { withCredentials: true, 
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',  
      headers: { "API-KEY": '83927d7b-5045-4135-aced-5487d21ee72f'}})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 20) {
        return (            
            instanseAxios.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    },

    postFollow(userId) {
        return (
            instanseAxios.post(`follow/${userId}`)
            // Axios.post(`${rootUrlAPI}/follow/${userId}`, {}, 
            // { withCredentials: true, 
            // headers: { "API-KEY": KeyAPI}}) 
            .then(response => response.data)
        )    
    },
    
    deleteFollow(userId){
        return (
            instanseAxios.delete(`follow/${userId}`)
            // Axios.post(`${rootUrlAPI}/follow/${userId}`, {}, 
            // { withCredentials: true, 
            // headers: { "API-KEY": KeyAPI}}) 
            .then(response => response.data)
        ) 
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
        return profileAPI.getProfile(userId);
    }
}      

export const profileAPI = {
    getProfile(userId) {
        return (
            instanseAxios.get(`profile/${userId}`)
           // Axios.get(`${rootUrlAPI}/profile/${userId}`)
            .then(response => response.data)
        )
    },

    getStatus(userId) {
        return (
            instanseAxios.get(`profile/status/${userId}`)        
            .then(response => response.data)
        )
    },    

    updateStatus(status){
        return instanseAxios.put('profile/status', { status: status })
        .then(response => response.data)
    }
}



export const authAPI = {
    getMe() {
        return (
            instanseAxios.get(`auth/me`)
            // Axios.get(`${rootUrlAPI}/auth/me`,            
            //     { withCredentials: true, 
            //       headers: { "API-KEY": KeyAPI}})
                .then(response => response.data)
        )
    }
}

