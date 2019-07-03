import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png" alt=""/>
            <h5>Post</h5>
        </div>
    )
}

export default Post;