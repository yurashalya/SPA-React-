import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id} /> );

    let newPostElements = React.createRef();

    let onAddPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD-POST'});
    }
    
    let onPostChange = () => {
        let text = newPostElements.current.value;
        let action = ({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        props.dispatch(action);
    }

    return (
        <div className={classes.postBlock}> 
            <h3>My Post</h3> 
            <div>
                <div>
                    <textarea ref={newPostElements} onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
               {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;