import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

let dialogs = [
    {id:1, name: 'Artem'},
    {id:2, name: 'Artur'},
    {id:3, name: 'Natalia'},
    {id:4, name: 'Zhenia'}
]

let dialogsElements = dialogs.map(d => <Dialog name={d.name} id={d.id} />);


let messages = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you'},
    {id:3, message: 'ok'},
    {id:4, message: 'yo'},
    {id:5, message: 'yo'}
]

let messagesElements = messages.map(m => <Message message={m.message} />);



const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>                
            </div>
    );
}

export default Dialogs;