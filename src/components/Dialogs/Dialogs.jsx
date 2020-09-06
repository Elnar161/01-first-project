import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/DialogsReducer';



const Dialogs = (props) => {
    debugger;
    let state = props.store.getState().dialogsPage;

    let arrDialogs = state.dialogs.map((d) => <Dialog name={d.name} id={d.id} avaUrl={d.avaUrl}/>);
    let arrMessages = state.messages.map((m) => <Message message={m.message} />);

    let addMessage = () => {
         let action = addMessageActionCreator();
         props.store.dispatch(action);
        };

    let textByAddChange = (event) => {
        let action = updateNewMessageTextActionCreator(event.target.value);
        props.store.dispatch(action);            
    }

    return (
        
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {arrDialogs}
                </div>
                <div className={s.messages}>
                    {arrMessages}

                    <textarea id='textByAdd' onChange={textByAddChange} value={state.newMessageText}></textarea>
                    <button onClick={addMessage}>отправить</button>
                </div>                
            </div>
    );
}

export default Dialogs;