import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {addPost, subscribe} from './redux/State';
import {updateNewPostText} from './redux/State';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import state from './redux/State';


let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} /> 
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireThree(state);
subscribe(rerenderEntireThree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
