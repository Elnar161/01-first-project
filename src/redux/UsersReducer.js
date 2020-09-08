const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    users:
        [
            {
                id: 1,
                fullName: 'Dmitry K.',
                status: "I'm looking for a Job right now...",
                location: {city: "Russia", country: "Moskow"},
                followed: false
            },
            {
                id: 2,
                fullName: 'Svetlana D.',
                status: "I am so pretty",
                location: {city: "Minsk", country: "Belarus"},            
                followed: true
            },
            {
                id: 3,
                fullName: 'Sergey S.',
                status: "I like football!!!",
                location: {city: "Ukraine", country: "Kiev"},                
                followed: true
            },
            {
                id: 4,
                fullName: 'Andrew T.',
                status: "I am free to help you to create good Video Production",
                location: {city: "United States", country: "Philadelphia"},                
                followed: false
            }
        ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 7, message: state.newPostText, likesCount: 0 }],
                newPostText: ""
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default: return state;
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default usersReducer;