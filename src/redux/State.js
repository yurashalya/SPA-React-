let store = {
    _state : {
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
    },

    getState () {
        return this._state;
    },

    _callSubscriber () {
        console.log('State change');
    },

    addPost() {
        let newPost = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;   
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    } 
    
}


export default store;

window.store = store;