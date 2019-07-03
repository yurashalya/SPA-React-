import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png" alt=""/>
            <h5>{ props.message }</h5>
        </div>
    )
}

export default Post;