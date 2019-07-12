import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


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
            ],
            dialogs: [
                { id: 1, name: 'Yura' },
                { id: 2, name: 'Roma' },
                { id: 3, name: 'Tanya' }, 
                { id: 4, name: 'Dasha' },
                { id: 5, name: 'Lena' },
                { id: 6, name: 'Gleb' },
            ],
            newMessageBody: ""

        }
    },
    _callSubscriber() {
        console.log('State change');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // type: "ADD POST"

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);


        this._callSubscriber(this._state);       
    }
}





export default store;
window.store = store;