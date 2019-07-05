import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://img.pngio.com/parent-directory-avatar-2png-avatar-png-256_256.png" alt=""/>
            <p>{ props.message }</p>
            <span>Like </span> {props.likesCount}
        </div>
    )
}

export default Post;