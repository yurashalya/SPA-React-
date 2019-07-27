import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.mainLogo} src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" />
            <div className={classes.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;