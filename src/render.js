import React from 'react';
import ReactDOM from 'react-dom';
import state, { changeNewMessageText } from './redux/State.js';
import {addPost, changeNewPostText} from  './redux/State.js';
import App from './App.js';

export let rerenderEnrireTree = (props) => {
    ReactDOM.render(
      <React.StrictMode>
        <App appState={state} addPost={addPost} changeNewPostText={changeNewPostText} changeNewMessageText={changeNewMessageText}/>        
      </React.StrictMode>,
      document.getElementById('root')
    );
  };