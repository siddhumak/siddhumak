import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCIBNFzJw-JSbkcplBQBMuwabX_6j7YUbE",
    authDomain: "myproject-db8a4.firebaseapp.com",
    projectId: "myproject-db8a4",
    storageBucket: "myproject-db8a4.appspot.com",
    messagingSenderId: "980390616536",
    appId: "1:980390616536:web:d9633ee2b835f71c42e6ad",
    measurementId: "G-WRXBFJFWK8"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export{auth,db,storage}
