import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id} /> );

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
               {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;