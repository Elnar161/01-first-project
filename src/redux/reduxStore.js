
import dialogsReducer from './DialogsReducer.js';
import profileReducer from './ProfileReducer.js';
import sidebarReducer from './SidebarReducer.js';
import usersReducer from './UsersReducer.js';

const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;