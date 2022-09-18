import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: "AIzaSyC_DTBLfK-cVx1Vn37u2yHkS9sMt7o0SEg",
  authDomain: "coder-react-ecomerce.firebaseapp.com",
  projectId: "coder-react-ecomerce",
  storageBucket: "coder-react-ecomerce.appspot.com",
  messagingSenderId: "397377445348",
  appId: "1:397377445348:web:45be0453b5e4caf2b1bbf1"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
