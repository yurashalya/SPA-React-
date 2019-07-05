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
    return <div className={classes.massage}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Yura" id="1" />
                <DialogItem name="Roma" id="2" />
                <DialogItem name="Tanya" id="3" />
                <DialogItem name="Dasha" id="4" />
                <DialogItem name="Lena" id="5" />
                <DialogItem name="Gleb" id="6" />
            </div>
            <div className={classes.massages}>
                <Message message = "React" />
                <Message message = "Vue" />
                <Message message = "Angular" />

            </div>
        </div>
    )
}

export default Dialogs;