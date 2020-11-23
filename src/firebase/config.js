// import * as firebase from 'firebase/app';
import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyD7XkKH1_BAMI-P9FGAB2FhnqXY43vffDg",
    authDomain: "anirudh-firegram.firebaseapp.com",
    databaseURL: "https://anirudh-firegram.firebaseio.com",
    projectId: "anirudh-firegram",
    storageBucket: "anirudh-firegram.appspot.com",
    messagingSenderId: "885761968669",
    appId: "1:885761968669:web:a051357f3790e4366654f4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, projectAuth, timestamp };

