import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAj8lR9euPbQqO0RROPswiUQvURdfsgfhQ",
  authDomain: "react-contact-app-e2b5d.firebaseapp.com",
  projectId: "react-contact-app-e2b5d",
  storageBucket: "react-contact-app-e2b5d.appspot.com",
  messagingSenderId: "206580403810",
  appId: "1:206580403810:web:9cb67ed94d2852d7950b3b",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
 