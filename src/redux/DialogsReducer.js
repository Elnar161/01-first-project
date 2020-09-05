
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            debugger;
            let newMessage = {
                id: 6,
                message: state.newMessageText
              }
          
              state.messages.push(newMessage);
              state.newMessageText = '';       

              return state;
            break;
    
        case UPDATE_NEW_MESSAGE_TEXT:
            debugger;
            state.newMessageText = action.newText;  
            
            return state;
            break;
        default: return state;
    } 
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => 
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

  
export default dialogsReducer;