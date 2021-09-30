import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {initializeApp} from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDOHrowop4KruNWXMXGGjR96KZJr-lQXRI",
    authDomain: "react-todo-login.firebaseapp.com",
    projectId: "react-todo-login",
    storageBucket: "react-todo-login.appspot.com",
    messagingSenderId: "4221066372",
    appId: "1:4221066372:web:56634d97b2a8aaffff36d1",
    measurementId: "G-KR9YTB7VLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
