import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.postBlock}> 
            <h3>My Post</h3> 
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, how are you" />
                <Post message="It's my first post" />
                <Post message="React.js" />          
            </div>
        </div>

    )
}

export default MyPosts;