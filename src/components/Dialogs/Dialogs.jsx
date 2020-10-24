import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';




const Dialogs = (props) => {
    if (!props.isAuth)
    {
        return <Redirect to='/Login' />
    }


    let arrDialogs = props.dialogs.map((d) => <Dialog name={d.name} id={d.id} avaUrl={d.avaUrl} key={d.id}/>);
    let arrMessages = props.messages.map((m) => <Message message={m.message} key={m.id} />);

    let addMessage = () => {
            props.addMessage();
        };

    let textByAddOnChange = (event) => {
        props.textByAddOnChange(event.target.value);       
    };

    const addNewMessage = (data) =>{
        props.addMessage(data.newMessageBody);
    }

    return (
        
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {arrDialogs}
            </div>
            <div className={s.messages}>
                {arrMessages}

                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>                
        </div>
    );
}

const AddMessageForm = (props) => {

    return <Form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"textarea"} name='newMessageBody'  
                   placeholder="Enter your message" />
        </div>
        <div>
            <button>отправить</button>
        </div>
    </Form>
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogsaddMessageForm'
})
(AddMessageForm)

export default Dialogs;