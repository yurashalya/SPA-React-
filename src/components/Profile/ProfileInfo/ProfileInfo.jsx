import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={classes.contentImg} src="https://www.ateamindia.com/wp-content/uploads/2019/04/web-dev.jpg" />
            </div>
            <div className={classes.descBlock}>
                <img src={props.profile.photos.large} />
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;