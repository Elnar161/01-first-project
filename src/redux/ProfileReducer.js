import { stopSubmit } from "redux-form";
import { usersAPI, profileAPI } from "../api/API";

const ADD_POST = 'profilePage/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profilePage/UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'profilePage/SET_PROFILE_INFO';
const SET_STATUS = 'profilePage/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'profilePage/SAVE_PROFILE_SUCCESS';


let initialState = {
        profileInfo: {
          aboutMe: null,
          contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
          },
          lookingForAJob: false,
          lookingForAJobDescription: null,
          fullName: "ChistiyKaif",
          userId: -1,
          photos: {
            small: null,
            large: null
          }
        },
        
   // profilePage: {
        postsData:
        [
          {id:1, message: 'Hi, how a you', likesCount: 10},
          {id:2, message: 'It`s my firs post', likesCount: 14}
        ],
    
        newPostText: "newPostText",
        status: ''
      //}
};

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
          return {
            ...state,
            postsData: [...state.postsData, {id:7, message: action.newPostText, likesCount: 0}],
            newPostText: ""
          };
              /*{
                let newPost = {
                    id: 7,
                    message: state.newPostText,
                    likesCount: 0
                };
                
                let stateCopy = {...state};
                stateCopy.postsData = [...state.postsData]

                stateCopy.postsData.push(newPost);
                stateCopy.newPostText = '';           
                
                return stateCopy;
              }
            break;*/
    
        case UPDATE_NEW_POST_TEXT:
              return{
                ...state,
                newPostText: action.newText
              };
        /*{
            let stateCopy = {...state};
            //stateCopy.postsData = [...state.postsData]

            stateCopy.newPostText = action.newText;          
            
            return stateCopy;
          }
            break;*/
          case SET_PROFILE_INFO:
            return{
              ...state,
              profileInfo: action.profileInfo
            };    
            
          case SET_STATUS:
            return{
              ...state,
              status: action.newStatus
            };            
          case SAVE_PHOTO_SUCCESS:
            return{
              ...state,
              profileInfo: 
              {...state.profileInfo, photos: action.photos}
            }; 
        default: return state;
    }    
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText: newPostText})

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const setProfileInfoActionCreator= (profileInfo) =>
  ( {type: SET_PROFILE_INFO, profileInfo} )  

export const setStatusActionCreator= (newStatus) =>
  ( {type: SET_STATUS, newStatus} )    

export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
  let data = await usersAPI.getProfile(userId)
   dispatch(setProfileInfoActionCreator(data));

}  

export const getStatusThunkCreator = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatusActionCreator(data));
} 

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatusActionCreator(status))
  }
}
export const setPhotoSuccessActionCreator= (photos) =>
  ( {type: SAVE_PHOTO_SUCCESS, photos} )

export const savePhotoThunkCreator = (file) => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(setPhotoSuccessActionCreator(data.data.photos))
  }  
}

export const saveProfileThunkCreator = (profile) => async (dispatch, getState) => {
  debugger;
  let userId = getState().auth.userId;
  let data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfileThunkCreator(userId));
  }
  else{
    debugger;
    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    let action = stopSubmit('profile', {_error: message});     
    
    //чтобы подсветить поле
    //let action = stopSubmit('profile', {"contacts":{"facebook": message}});     
    
    debugger;
    let a = dispatch(action);  
    return Promise.reject(message);
} 
}

  
export default profileReducer;