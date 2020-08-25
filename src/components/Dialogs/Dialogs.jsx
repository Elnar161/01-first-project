import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

let dialogsData = [
    {id:1, name: 'Artem'},
    {id:2, name: 'Artur'},
    {id:3, name: 'Natalia'},
    {id:4, name: 'Zhenia'}
]

let messagesData = [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you'},
    {id:3, message: 'ok'}
]

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
                    <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
                </div>
                <div className={s.messages}>
                    <Message message={dialogsData[0].message} />
                    <Message message={dialogsData[1].message} />
                    <Message message={dialogsData[2].message} />
                </div>                
            </div>
    );
}

export default Dialogs;