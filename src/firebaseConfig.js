// // firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCPcbG5cZLNTq8QiDcxthdR2tC_VlZZxW0",
  authDomain: "auth-8c2b6.firebaseapp.com",
  projectId: "auth-8c2b6",
  storageBucket: "auth-8c2b6.appspot.com",
  messagingSenderId: "525126254329",
  appId: "1:525126254329:web:41fbf65602637c9939ec28",
  measurementId: "G-YKT9S4GJ71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();

export {app, auth};