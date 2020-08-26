import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = (props) => {
    debugger;
    let arrDialogs = props.dialogs.map((d) => <Dialog name={d.name} id={d.id} />);
    let arrMessages = props.messages.map((m) => <Message message={m.message} />);

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