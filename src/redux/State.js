const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    debugger;
    return this._state;
  },

  _callSubscriber(){
    console.log('no subscriber (observers)');
  },

  setSubscribe(observer){
    this._callSubscriber = observer;
  },

  setNewPostText(newText){
    //console.log(this);
     this._state.profilePage.newPostText = newText;
     this._callSubscriber(this);
  },

  addNewPost(){
    debugger;
    let newPost = {
      id: 7,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this);
  },

  addNewMessage(){
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText
    }

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this);
  },

  updateNewMessageText(text){
    this._state.dialogsPage.newMessageText = text;
    this._callSubscriber(this);
  },

  dispatch(action){
    //{type: 'ADD-POST'}

    if(action.type === ADD_POST)
    {
      let newPost = {
        id: 7,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
  
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this);
    }
    else
    if (action.type === UPDATE_NEW_POST_TEXT)
    {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this);      
    }
    else
    if(action.type === ADD_MESSAGE)
    {
      this.addNewMessage();
    }
    else
    if(action.type === UPDATE_NEW_MESSAGE_TEXT)
    {
      this.updateNewMessageText(action.newText)
    }

  }
}



export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextActionCreator = (text) => 
  ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
// {
//   return{
//       type: UPDATE_NEW_MESSAGE_TEXT,
//       newText: text
//   };
// }
window.store = store;
export default store;