import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDbgI7CMSsfHXHkowc54yoBdexY8pCh0UA",
    authDomain: "clone-b2521.firebaseapp.com",
    databaseURL: "https://clone-b2521.firebaseio.com",
    projectId: "clone-b2521",
    storageBucket: "clone-b2521.appspot.com",
    messagingSenderId: "425098752089",
    appId: "1:425098752089:web:db4fb4f0f9556179e28148",
    measurementId: "G-F2NVGCHC74"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}
