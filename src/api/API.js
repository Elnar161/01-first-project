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
        return(
            instanseAxios.delete(`follow/${userId}`)
            // Axios.delete(`${rootUrlAPI}/follow/${userId}`, 
            //     { withCredentials: true, 
            //       headers: { "API-KEY": KeyAPI}}) 
                  .then(response => response.data)
        )     
    }

}      


export const getProfile = (userId) => {
    return (
        instanseAxios.get(`profile/${userId}`)
       // Axios.get(`${rootUrlAPI}/profile/${userId}`)
        .then(response => response.data)
    )
}



export const getAuthMe = (currentPage = 1, pageSize = 20) => {
    return (
        instanseAxios.get(`auth/me`)
        // Axios.get(`${rootUrlAPI}/auth/me`,            
        //     { withCredentials: true, 
        //       headers: { "API-KEY": KeyAPI}})
            .then(response => response.data)
    )
}
