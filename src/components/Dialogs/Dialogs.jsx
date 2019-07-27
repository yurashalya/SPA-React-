import React from 'react';
import { reduxForm, Field } from 'redux-form';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogsPage; 

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
   
    let messagesElements = state.messages
        .map(m => <Message message = {m.message} id={m.id} key={m.id} />);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div> 
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                 name={'newMessageBody'} 
                 placeholder={'Enter your message'} />          
            </div>
            <div><button>Send</button> </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm);

export default Dialogs;