import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    debugger;
    let arrDialogs = props.dialogs.map((d) => <Dialog name={d.name} id={d.id} avaUrl={d.avaUrl} key={d.id}/>);
    let arrMessages = props.messages.map((m) => <Message message={m.message} key={m.id} />);

    let addMessage = () => {
            props.addMessage();
        };

    let textByAddOnChange = (event) => {
        props.textByAddOnChange(event.target.value);       
    };

    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {arrDialogs}
            </div>
            <div className={s.messages}>
                {arrMessages}

                <textarea id='textByAdd' onChange={textByAddOnChange} value={props.newMessageText}></textarea>
                <button onClick={addMessage}>отправить</button>
            </div>                
        </div>
    );
}

export default Dialogs;