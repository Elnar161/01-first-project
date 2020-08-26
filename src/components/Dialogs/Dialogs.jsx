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
  
  
  let messages = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you'},
    {id:3, message: 'ok'},
    {id:4, message: 'yo'},
    {id:5, message: 'yo'}
  ]

const Dialogs = (props) => {
    let arrDialogs = dialogs.map((d) => <Dialog name={d.name} id={d.id} />);
    let arrMessages = messages.map((m) => <Message message={m.message} />);
    return (
        
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {arrDialogs}
                </div>
                <div className={s.messages}>
                    {arrMessages}
                </div>                
            </div>
    );
}

export default Dialogs;