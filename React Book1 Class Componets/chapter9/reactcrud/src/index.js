import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'bootstrap/dist/css/bootstrap.min.css'


  const config = {
    apiKey: "AIzaSyD5XUldSkgAen-q6lWPHFsJ7towpnxLz7g",
    authDomain: "myfirstrreactproject.firebaseapp.com",
    projectId: "myfirstrreactproject",
    storageBucket: "myfirstrreactproject.appspot.com",
    messagingSenderId: "936576546537",
    appId: "1:936576546537:web:06afe6c812d5a810e06278",
    measurementId: "G-BN12V9C5YX"
  };

firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
