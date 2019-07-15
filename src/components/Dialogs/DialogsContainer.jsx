import React from 'react';


import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


// const DialogsContainer = () => {
//     return  <StoreContext.Consumer> 
//         { store => {             
//                 // let state = store.getState(); 
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator());
//                 }
           
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body));
//                 }

//                 return  <Dialogs updateNewMessageBody={onNewMessageChange} 
//                     sendMessage={onSendMessageClick}
//                     dialogsPage={store.getState().dialogsPage} />
//             }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchTooProps = (dispatch) => {
    return {
        sendMessage: () => { dispatch(sendMessageCreator()) },
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchTooProps) (Dialogs);

export default DialogsContainer;