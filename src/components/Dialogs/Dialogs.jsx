import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    <Dialog name='Artem' id='1' />

                    <Dialog name='Artur' id='2' />

                    <Dialog name='Natalia' id='3' />

                    <Dialog name='Zhenia' id='4' />
                </div>
                <div className={s.messages}>
                    <Message message='Hi' />
                    <Message message='How are you' />
                    <Message message='ok' />
                </div>                
            </div>
    );
}

export default Dialogs;