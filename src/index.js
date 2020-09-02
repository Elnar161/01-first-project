import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import state, { changeNewMessageText } from './redux/State.js';
import {addPost, changeNewPostText, subscribe} from  './redux/State.js';
import App from './App.js';

export let rerenderEnrireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <App appState={state} addPost={addPost} changeNewPostText={changeNewPostText} changeNewMessageText={changeNewMessageText}/>        
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

  subscribe(rerenderEnrireTree);

rerenderEnrireTree();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
