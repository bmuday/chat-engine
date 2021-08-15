import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAoij7-JVln1dHXpwD27j0Vzc6hntnxoR4",
    authDomain: "chat-engine-5d554.firebaseapp.com",
    projectId: "chat-engine-5d554",
    storageBucket: "chat-engine-5d554.appspot.com",
    messagingSenderId: "6624475125",
    appId: "1:6624475125:web:4328a521c8c5df905fd2bc",
  })
  .auth();
