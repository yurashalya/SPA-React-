import React from 'react';
import classes from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {

    return (
        <div> 
          <ProfileInfo />
          <MyPostContainer  />
        </div>
    )
}

export default Profile;