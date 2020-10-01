const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users:
        [
            {
                id: 1,
                photoURL: 'https://ne-kurim.ru/forum/attachments/s1200-jpeg.1186745/',
                fullName: 'Dmitry K.',
                status: "I'm looking for a Job right now...",
                location: {city: "Russia", country: "Moskow"},
                followed: false
            },
            {
                id: 2,
                photoURL: 'https://ne-kurim.ru/forum/attachments/s1200-jpeg.1186745/',
                fullName: 'Svetlana D.',
                status: "I am so pretty",
                location: {city: "Minsk", country: "Belarus"},            
                followed: true
            },
            {
                id: 3,
                photoURL: 'https://ne-kurim.ru/forum/attachments/s1200-jpeg.1186745/',
                fullName: 'Sergey S.',
                status: "I like football!!!",
                location: {city: "Ukraine", country: "Kiev"},                
                followed: true
            },
            {
                id: 4,
                photoURL: 'https://ne-kurim.ru/forum/attachments/s1200-jpeg.1186745/',
                fullName: 'Andrew T.',
                status: "I am free to help you to create good Video Production",
                location: {city: "United States", country: "Philadelphia"},                
                followed: false
            }
        ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            
            return {
                ...state,
               // users: [...state.users]
               users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: true}
                   }

                   return u;
               })
            };

        case UNFOLLOW:
            return {
                ...state,
               // users: [...state.users]
               users: state.users.map(u => {
                   if (u.id === action.userId) {
                       return {...u, followed: false}
                   }
                   
                   return u;
               })
            };

        case UNFOLLOW: 
            return { ...state, users: [ ...state.users, ...action.users]}
        default: return state;
    }
}


export const followActionCreator = (userId) => ({ type: FOLLOW, userId })

export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersActionCreator = (users) =>
    ({ type: SET_USERS, users })


export default usersReducer;