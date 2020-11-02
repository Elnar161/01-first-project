const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type DialogType = {
  id: number
  name: string
  avaUrl: string | null
}

type MessageType = {
  id: number
  message: string
}

let initialState = {
    
        dialogs: 
        [
          {id:1, name: 'Artem', avaUrl: 'https://im0-tub-ru.yandex.net/i?id=d52f60cba4fbcb951a2a00fcaeddbaba&n=13&exp=1'},
          {id:2, name: 'Artur', avaUrl: 'https://im0-tub-ru.yandex.net/i?id=13acf8c36ad8d2915ffa9d5f115fc10d&n=13&exp=1'},
          {id:3, name: 'Zhenia', avaUrl: 'https://img2.freepng.ru/20171216/942/futurama-bender-png-5a35713a96d414.7990269015134518346178.jpg'},
          {id:4, name: 'Natalia', avaUrl: 'http://geekster.ru/wp-content/uploads/2013/03/8_8.png'}
        ] as Array<DialogType>,
      
        messages: 
        [
          {id:1, message: 'Hi'},
          {id:2, message: 'How are you'},
          {id:3, message: 'ok'},
          {id:4, message: 'yo'},
          {id:5, message: 'yo'}
        ] as Array<MessageType>,
    
        newMessageText: "newMessageText"      
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType =>{
    switch (action.type) {
        case ADD_MESSAGE:
            return {            
              ...state,
              messages: [...state.messages, {id: 6, message: action.message}],
              newMessageText: ""
            };          
    
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
              ...state,
              newMessageText: action.newText//перезатирает свойство скопированное в ...state
            };

        default: return state;
    } 
}

type AddMessageActionType = {
  type: typeof ADD_MESSAGE
  message: string
}
export const addMessageActionCreator = (message: string): AddMessageActionType => 
  ({type: ADD_MESSAGE, message: message})

type UpdateNewMessageTextActionType = {
  type: typeof UPDATE_NEW_MESSAGE_TEXT
  newText: string
}
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType => 
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default dialogsReducer;