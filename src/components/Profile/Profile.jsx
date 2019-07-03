import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.content}>
          <div>
            <img className={classes.contentImg} src="https://www.ateamindia.com/wp-content/uploads/2019/04/web-dev.jpg" />
          </div>
          <div>
            ava + descr
          </div>
          <MyPosts />
        </div>
    )
}

export default Profile;