
import authReducer from './AuthReducer.js';
import dialogsReducer from './DialogsReducer.js';
import profileReducer from './ProfileReducer.js';
import sidebarReducer from './SidebarReducer.js';
import usersReducer from './UsersReducer.js';
import {reducer as formReducer } from 'redux-form';

import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;