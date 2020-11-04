
import authReducer from './AuthReducer';
import dialogsReducer from './DialogsReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './SidebarReducer';
import usersReducer from './UsersReducer';
import {reducer as formReducer } from 'redux-form';

import thunkMiddleware from 'redux-thunk';
import appReducer from './AppReducer';

const { createStore, combineReducers, applyMiddleware, compose } = require("redux");


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;


const composeEnhancers = compose;//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

// @ts-ignore
window.store = store;
export default store;