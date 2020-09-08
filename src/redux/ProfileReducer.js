const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
   // profilePage: {
        postsData:
        [
          {id:1, message: 'Hi, how a you', likesCount: 10},
          {id:2, message: 'It`s my firs post', likesCount: 14}
        ],
    
        newPostText: "newPostText"
      //}
};

const profileReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_POST:
          return {
            ...state,
            postsData: [...state.postsData, {id:7, message: state.newPostText, likesCount: 0}],
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
        default: return state;
    }    
}


export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

  
export default profileReducer;