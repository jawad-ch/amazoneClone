import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7fNaa8hXyYkMQwiuA3-0vD5fgnDoPKOc",
    authDomain: "eclone-f3f83.firebaseapp.com",
    databaseURL: "https://eclone-f3f83.firebaseio.com",
    projectId: "eclone-f3f83",
    storageBucket: "eclone-f3f83.appspot.com",
    messagingSenderId: "105560664063",
    appId: "1:105560664063:web:54fc654f24de45cc9429ca"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth()

export { db, auth };