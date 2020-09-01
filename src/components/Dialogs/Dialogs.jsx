import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = (props) => {
    debugger;
    let arrDialogs = props.dialogsPageState.dialogs.map((d) => <Dialog name={d.name} id={d.id} avaUrl={d.avaUrl}/>);
    let arrMessages = props.dialogsPageState.messages.map((m) => <Message message={m.message} />);

    let textByAdd_ref = React.createRef();
    let addMessage = () => { alert(textByAdd_ref.current.value)};

    let textByAddChange = () => {
            props.changeNewMessageText(textByAdd_ref.current.value);
    }

    return (
        
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {arrDialogs}
                </div>
                <div className={s.messages}>
                    {arrMessages}

                    <textarea id='textByAdd' ref={textByAdd_ref} onChange={textByAddChange} value={props.dialogsPageState.newMessageText}></textarea>
                    <button onClick={addMessage}>отправить</button>
                </div>                
            </div>
    );
}

export default Dialogs;