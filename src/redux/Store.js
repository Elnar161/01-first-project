import dialogsReducer from './DialogsReducer.js';
import profileReducer from './ProfileReducer.js';
import sidebarReducer from './SidebarReducer.js';

let store = {
  _state : {
    dialogsPage:{
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
    },
    
    profilePage: {
      postsData:
      [
        {id:1, message: 'Hi, how a you', likesCount: 10},
        {id:2, message: 'It`s my firs post', likesCount: 14}
      ],
  
      newPostText: "newPostText"
    },
  
    sideBar:{
      friends:
      [
        {id:1, name: 'Artem', avaUrl: 'https://im0-tub-ru.yandex.net/i?id=d52f60cba4fbcb951a2a00fcaeddbaba&n=13&exp=1'},
        {id:2, name: 'Artur', avaUrl: 'https://im0-tub-ru.yandex.net/i?id=13acf8c36ad8d2915ffa9d5f115fc10d&n=13&exp=1'},
        {id:3, name: 'Zhenia', avaUrl: 'https://img2.freepng.ru/20171216/942/futurama-bender-png-5a35713a96d414.7990269015134518346178.jpg'},
        {id:4, name: 'Natalia', avaUrl: 'http://geekster.ru/wp-content/uploads/2013/03/8_8.png'}
      ]
    }
  },
 
  getState(){
    return this._state;
  },

  _callSubscriber(){
    console.log('no subscriber (observers)');
  },

  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action){

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);  
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);  
    this._callSubscriber(this);

  }
}







window.store = store;
export default store;