import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



let dialogs = [
  {id:1, name: 'Artem'},
  {id:2, name: 'Artur'},
  {id:3, name: 'Natalia'},
  {id:4, name: 'Zhenia'}
]


let messages = [
  {id:1, message: 'Hi'},
  {id:2, message: 'How are you'},
  {id:3, message: 'ok'},
  {id:4, message: 'yo'},
  {id:5, message: 'yo'}
]

let postsData = [
  {id:1, message: 'Hi, how a you', likesCount: 10},
  {id:2, message: 'It`s my firs post', likesCount: 14}
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
