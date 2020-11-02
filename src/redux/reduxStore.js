
import authReducer from './AuthReducer.ts';
import dialogsReducer from './DialogsReducer.ts';
import profileReducer from './ProfileReducer.ts';
import sidebarReducer from './SidebarReducer.ts';
import usersReducer from './UsersReducer.ts';
import {reducer as formReducer } from 'redux-form';

import thunkMiddleware from 'redux-thunk';
import appReducer from './AppReducer.ts';

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