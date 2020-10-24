import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';



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
        newMessageText: state.dialogsPage.newMessageText        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message))
        },
        textByAddOnChange: (text) => {
             dispatch(updateNewMessageTextActionCreator(text))}
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);