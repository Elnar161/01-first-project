import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {
debugger;
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
         let action = addMessageActionCreator();
         props.store.dispatch(action);
        };

    let textByAddOnChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);            
    }

    return (
        <Dialogs 
            dialogs={state.dialogs}
            messages={state.messages}
            newMessageText={state.newMessageText}
            addMessage={addMessage}
            textByAddOnChange={textByAddOnChange}/>
    );
}

export default DialogsContainer;