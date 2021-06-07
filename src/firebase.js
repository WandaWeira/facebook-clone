// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNzKir1RY7rWBtRO8sAFeUaiVA2YnAQs0",
    authDomain: "give-a-lot.firebaseapp.com",
    projectId: "give-a-lot",
    storageBucket: "give-a-lot.appspot.com",
    messagingSenderId: "222675312789",
    appId: "1:222675312789:web:5ae0e38056a4dac1fa7b9c",
    measurementId: "G-96QM0LB7LG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;