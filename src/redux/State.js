let state = {
  dialogsPage:{
    dialogs: 
    [
      {id:1, name: 'Artem'},
      {id:2, name: 'Artur'},
      {id:3, name: 'Natalia'},
      {id:4, name: 'Zhenia'}
    ],
  
    messages: 
    [
      {id:1, message: 'Hi'},
      {id:2, message: 'How are you'},
      {id:3, message: 'ok'},
      {id:4, message: 'yo'},
      {id:5, message: 'yo'}
    ],
  },
  
  profilePage: {
    postsData:
    [
      {id:1, message: 'Hi, how a you', likesCount: 10},
      {id:2, message: 'It`s my firs post', likesCount: 14}
    ]
  }
};

export default state;