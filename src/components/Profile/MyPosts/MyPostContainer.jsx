import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer> 
//         { (store) => {
//                 let state = store.getState();
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
                
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action);
//                 }

//                 return <MyPosts updateNewPostText={onPostChange} 
//                     addPost={addPost}
//                     newPostText = {state.profilePage.newPostText}
//                     posts={state.profilePage.posts} />
//             }
//         }
            
//         </ StoreContext.Consumer>
       
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchTooProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};


const MyPostsContainer = connect (mapStateToProps, mapDispatchTooProps) (MyPosts);

export default MyPostsContainer;