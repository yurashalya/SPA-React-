import React from 'react';
import { reduxForm, Field } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
    let postsElements = 
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} id={p.id} /> );

    let onAddPost = (values) => {
        props.addPost(values.newPostText);  
    }
    
    return (
        <div className={classes.postBlock}> 
            <h3>My Post</h3> 
           <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
               {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} component={'textarea'}  />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm);

export default MyPosts;