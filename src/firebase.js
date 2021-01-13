import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCKu2Yo9jkT992IdMERd1iXcnZCqLlbqmk",
    authDomain: "slack-chat-cc736.firebaseapp.com",
    databaseURL: "https://slack-chat-cc736.firebaseio.com",
    projectId: "slack-chat-cc736",
    storageBucket: "slack-chat-cc736.appspot.com",
    messagingSenderId: "31880147350",
    appId: "1:31880147350:web:3de242a5ee474ed02c2db7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;