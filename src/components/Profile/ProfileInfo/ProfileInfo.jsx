import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.contentImg} src="https://www.ateamindia.com/wp-content/uploads/2019/04/web-dev.jpg" />
            </div>
            <div className={classes.descBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;