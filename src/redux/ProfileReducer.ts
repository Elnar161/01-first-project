import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { usersAPI, profileAPI } from "../api/API";
import { ContactsType, PhotosType, PostType, ProfileType } from "../types/types";
import { AppStateType } from "./reduxStore";

const ADD_POST = 'profilePage/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profilePage/UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'profilePage/SET_PROFILE_INFO';
const SET_STATUS = 'profilePage/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profilePage/SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'profilePage/SAVE_PROFILE_SUCCESS';

let initialState = {
        profileInfo: {
          aboutMe: null as string | null,
          contacts: {
            facebook: null as string | null,
            website: null as string | null,
            vk: null as string | null,
            twitter: null as string | null,
            instagram: null as string | null,
            youtube: null as string | null,
            github: null as string | null,
            mainLink: null as string | null
          } as ContactsType,
          lookingForAJob: false,
          lookingForAJobDescription: null as string | null,
          fullName: "ChistiyKaif",
          userId: -1,
          photos: {
            small: null,
            large: null
          } as PhotosType
        } as ProfileType,
           
        postsData:
        [
          {id:1, message: 'Hi, how a you', likesCount: 10},
          {id:2, message: 'It`s my firs post', likesCount: 14}
        ] as Array<PostType>,
    
        newPostText: "newPostText",
        status: ''      
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType =>{
    switch (action.type) {
        case ADD_POST:
          return {
            ...state,
            postsData: [...state.postsData, {id:7, message: action.newPostText, likesCount: 0}],
            newPostText: ""
          };
    
        case UPDATE_NEW_POST_TEXT:
              return{
                ...state,
                newPostText: action.newText
              };

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

type ActionsTypes = AddPostActionType | UpdateNewPostTextActionCreator |
                    SetProfileInfoActionCreator | SetStatusActionCreator |
                    SetPhotoSuccessActionType

type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionType => 
({type: ADD_POST, newPostText: newPostText})

type UpdateNewPostTextActionCreator = {
  type: typeof UPDATE_NEW_POST_TEXT
  newText: string
}
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionCreator => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

type SetProfileInfoActionCreator = {
  type: typeof SET_PROFILE_INFO
  profileInfo: ProfileType
}
export const setProfileInfoActionCreator = (profileInfo: ProfileType): SetProfileInfoActionCreator =>
  ( {type: SET_PROFILE_INFO, profileInfo} )  

type SetStatusActionCreator = {
  type: typeof SET_STATUS
  newStatus: string
}
export const setStatusActionCreator = (newStatus: string): SetStatusActionCreator =>
  ( {type: SET_STATUS, newStatus} )    

type SetPhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const setPhotoSuccessActionCreator= (photos: PhotosType): SetPhotoSuccessActionType =>
  ( {type: SAVE_PHOTO_SUCCESS, photos} )


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes | FormAction>;

export const getUserProfileThunkCreator = (userId: number): ThunkType => async (dispatch) => {
  let data = await usersAPI.getProfile(userId)
   dispatch(setProfileInfoActionCreator(data));
}  

export const getStatusThunkCreator = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatusActionCreator(data));
} 

export const updateStatusThunkCreator = (status: string): ThunkType => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setStatusActionCreator(status))
  }
}

export const savePhotoThunkCreator = (file: any): ThunkType => 
async (dispatch) => {
  let data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(setPhotoSuccessActionCreator(data.data.photos))
  }  
}

export const saveProfileThunkCreator = (profile: ProfileType): ThunkType => 
async (dispatch, getState) => {
  
  let userId = getState().auth.userId;
  let data = await profileAPI.saveProfile(profile);
  if (data.resultCode === 0) {
    dispatch(getUserProfileThunkCreator(userId));
  }
  else{
    
    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
    let action = stopSubmit('profile', {_error: message});     
    
    //чтобы подсветить поле
    //let action = stopSubmit('profile', {"contacts":{"facebook": message}});     
    
    let a = dispatch(action);  
    return Promise.reject(message);
} 
}

  
export default profileReducer;