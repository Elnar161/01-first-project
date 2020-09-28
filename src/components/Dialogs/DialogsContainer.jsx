import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';



// const DialogsContainer = (props) => {
// debugger;

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;

//                     let addMessage = () => {
//                          let action = addMessageActionCreator();
//                          store.dispatch(action);
//                         };
                
//                     let textByAddOnChange = (text) => {
//                         let action = updateNewMessageTextActionCreator(text);
//                         store.dispatch(action);            
//                     }
                                    
                    
//                     return <Dialogs 
//                         dialogs={state.dialogs}
//                         messages={state.messages}
//                         newMessageText={state.newMessageText}
//                         addMessage={addMessage}
//                         textByAddOnChange={textByAddOnChange}/>
//                 }
//             }
//         </StoreContext.Consumer>                
// }


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        textByAddOnChange: (text) => {
             dispatch(updateNewMessageTextActionCreator(text))}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;