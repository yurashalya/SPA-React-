import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.navItem}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/Users" activeClassName={classes.activeLink}>Find Users</NavLink>
            </div>
            <div className={classes.navItem}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
         </nav>
    )
}

export default Nav;