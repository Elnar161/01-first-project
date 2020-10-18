import Axios from "axios";

const instanseAxios = Axios.create(
    { withCredentials: true, 
      baseURL: 'https://social-network.samuraijs.com/api/1.0/',  
      headers: { "API-KEY": '12437860-4bfb-442d-b610-ad5936303546'}})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 20) {
        return (            
            instanseAxios.get(`users?page=${currentPage}&count=${pageSize}`)
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

export const postFollow = (userId) => {
    return (
        instanseAxios.post(`follow/${userId}`)
        // Axios.post(`${rootUrlAPI}/follow/${userId}`, {}, 
        // { withCredentials: true, 
        // headers: { "API-KEY": KeyAPI}}) 
        .then(response => response.data)
    )    
}

export const deleteFollow = (userId) => {
    return(
        instanseAxios.delete(`follow/${userId}`)
        // Axios.delete(`${rootUrlAPI}/follow/${userId}`, 
        //     { withCredentials: true, 
        //       headers: { "API-KEY": KeyAPI}}) 
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

