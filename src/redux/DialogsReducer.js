const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    //dialogsPage:{
        dialogs: 
        [
          {id:1, name: 'Artem', avaUrl: 'https://im0-tub-ru.yandex.net/i?id=d52f60cba4fbcb951a2a00fcaeddbaba&n=13&exp=1'},
          {id:2, name: 'Artur', avaUrl: 'https://im0-tub-ru.yandex.net/i?id=13acf8c36ad8d2915ffa9d5f115fc10d&n=13&exp=1'},
          {id:3, name: 'Zhenia', avaUrl: 'https://img2.freepng.ru/20171216/942/futurama-bender-png-5a35713a96d414.7990269015134518346178.jpg'},
          {id:4, name: 'Natalia', avaUrl: 'http://geekster.ru/wp-content/uploads/2013/03/8_8.png'}
        ],
      
        messages: 
        [
          {id:1, message: 'Hi'},
          {id:2, message: 'How are you'},
          {id:3, message: 'ok'},
          {id:4, message: 'yo'},
          {id:5, message: 'yo'}
        ],
    
        newMessageText: "newMessageText"
      //}
}

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_MESSAGE:
            return {            
              ...state,
              messages: [...state.messages, {id: 6, message: action.message}],
              newMessageText: ""
            };
            /*let newMessage = {
                id: 6,
                message: state.newMessageText
              }
          
              let stateCopy = {...state};
              //stateCopy.dialogs = [...state.dialogs];
              
              //stateCopy.messages = [...state.messages];
              //stateCopy.messages.push(newMessage);
              stateCopy.messages = [...state.messages, newMessage];
              stateCopy.newMessageText = '';       

              return stateCopy;
            }
            break;*/
    
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
              ...state,
              newMessageText: action.newText//перезатирает свойство скопированное в ...state
            };
             /* let stateCopy = {...state};
              //stateCopy.dialogs = [...state.dialogs];
              //stateCopy.messages = [...state.messages];
              stateCopy.newMessageText = action.newText;  
            
            return stateCopy;
            }
            break;*/
        default: return state;
    } 
}

export const addMessageActionCreator = (message) => ({type: ADD_MESSAGE, message: message})

export const updateNewMessageTextActionCreator = (text) => 
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default dialogsReducer;