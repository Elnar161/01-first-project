import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/State.js';
import App from './App.js';

export let rerenderEnrireTree = (store1) => {
  debugger;
    let addPost = store1.addNewPost.bind(store1);

    ReactDOM.render(
      <React.StrictMode>
        <App appState={store.getState()} 
        dispach={store1.dispach.bind(store1)}/>        
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

store.setSubscribe(rerenderEnrireTree);

rerenderEnrireTree(store);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
