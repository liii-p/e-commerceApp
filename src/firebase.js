import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVP6rOp2ag0hJwmCsP87t105DqL74MzBk",
  authDomain: "tenue-12e7d.firebaseapp.com",
  projectId: "tenue-12e7d",
  storageBucket: "tenue-12e7d.appspot.com",
  messagingSenderId: "816778178736",
  appId: "1:816778178736:web:ffefd6c30fd90016468b75",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;
