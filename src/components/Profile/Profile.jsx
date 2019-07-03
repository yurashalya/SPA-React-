import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
          <div>
            <img className={classes.contentImg} src="https://www.ateamindia.com/wp-content/uploads/2019/04/web-dev.jpg" />
          </div>
          <div>
            ava + descr
          </div>
          <div> 
              My Post
              <div>
                New Post
              </div>
              <div className="posts">
                <div className={classes.item}>Post 1 </div>
                <div className={classes.item}>Post 2</div>
              </div>
          </div>
        </div>
    )
}

export default Profile;