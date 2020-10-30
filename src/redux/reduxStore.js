
import authReducer from './AuthReducer.js';
import dialogsReducer from './DialogsReducer.js';
import profileReducer from './ProfileReducer.js';
import sidebarReducer from './SidebarReducer.js';
import usersReducer from './UsersReducer.js';
import {reducer as formReducer } from 'redux-form';

import thunkMiddleware from 'redux-thunk';
import appReducer from './AppReducer.js';

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

//window.store = store;
export default store;