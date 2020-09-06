import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';



const DialogsContainer = (props) => {
debugger;

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let addMessage = () => {
                         let action = addMessageActionCreator();
                         store.dispatch(action);
                        };
                
                    let textByAddOnChange = (text) => {
                        let action = updateNewMessageTextActionCreator(text);
                        store.dispatch(action);            
                    }
                                    
                    
                    return <Dialogs 
                        dialogs={state.dialogs}
                        messages={state.messages}
                        newMessageText={state.newMessageText}
                        addMessage={addMessage}
                        textByAddOnChange={textByAddOnChange}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;