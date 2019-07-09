// import {rerenderEntireThree} from './../render';
let rerenderEntireThree = () => {
    console.log('State change ');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you', likesCount: 12 },
            { id: 2, message: 'It\'s my first post', likesCount: 15 },
            { id: 3, message: 'Hello, my friend', likesCount: 10 },
        ],
        newPostText: 'react lesson'
    },  
    dialogsPage: {
        messages: [
            { id: 1, message: 'React' },
            { id: 2, message: 'Vue' },
            { id: 3, message: 'Angular' },
            { id: 4, message: 'ES6' },
        ] ,
        dialogs: [
            { id: 1, name: 'Yura' },
            { id: 2, name: 'Roma' },
            { id: 3, name: 'Tanya' }, 
            { id: 4, name: 'Dasha' },
            { id: 5, name: 'Lena' },
            { id: 6, name: 'Gleb' },
        ]  
    }
};

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state);
}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;   
    rerenderEntireThree(state);
}

export const subscribe = (observer) => {
    rerenderEntireThree = observer;
} 

export default state;