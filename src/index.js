import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: 'Hi, how are you', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 15 },
    { id: 3, message: 'Hello, my friend', likesCount: 10 },
  ];

let dialogs = [
    { id: 1, name: 'Yura' },
    { id: 2, name: 'Roma' },
    { id: 3, name: 'Tanya' }, 
    { id: 4, name: 'Dasha' },
    { id: 5, name: 'Lena' },
    { id: 6, name: 'Gleb' },
];

let messages = [
    { id: 1, message: 'React' },
    { id: 2, message: 'Vue' },
    { id: 3, message: 'Angular' },
    { id: 4, message: 'ES6' },
];


ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
