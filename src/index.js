import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/reduxStore';
import App from './App.js';
import { Provider } from 'react-redux';


// export let rerenderEnrireTree = (store) => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          {/* <App  dispatch={store.dispatch.bind(store)} store={store}/>         */}
          <App />        
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  // };
// debugger;
// store.subscribe(() => { rerenderEnrireTree(store); });

// rerenderEnrireTree(store);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
