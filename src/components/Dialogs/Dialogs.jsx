import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Dialogs.module.css';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={ path } >{ props.name }</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Yura' },
        { id: 2, name: 'Roma' },
        { id: 3, name: 'Tanya' },
        { id: 4, name: 'Dasha' },
        { id: 5, name: 'Lena' },
        { id: 6, name: 'Gleb' },
    ]

    let messageData = [
        { id: 1, message: 'React' },
        { id: 2, message: 'Vue' },
        { id: 3, message: 'Angular' },
    ]


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={classes.messages}>
                <Message message = {messageData[0].message} id={messageData[0].id} />
                <Message message = {messageData[1].message} id={messageData[1].id} />
                <Message message = {messageData[2].message} id={messageData[2].id} />
            </div>
        </div>
    )
}

export default Dialogs;