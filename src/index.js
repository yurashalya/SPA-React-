import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import store from './redux/State';


let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} 
            dispatch={store.dispatch.bind(store)}
            store={store} 
            /> 
        </BrowserRouter>
        , document.getElementById('root'));
}

rerenderEntireThree(store.getState());
store.subscribe(rerenderEntireThree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
