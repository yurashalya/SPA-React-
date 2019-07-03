import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.navItem}>
                <a href="#">Profile</a>
            </div>
            <div className={classes.navItem}>
                <a href="#">Messages</a>
            </div>
            <div className={classes.navItem}>
                <a href="#">News</a>
            </div>
            <div className={classes.navItem}>
                <a href="#">Music</a>
            </div>
            <div className={classes.navItem}>
                <a href="#">Settings</a>
            </div>
         </nav>
    )
}

export default Nav;