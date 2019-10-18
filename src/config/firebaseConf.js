import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAajO9XHAP2ELytDqkpht5K47LNQpSFTkk",
  authDomain: "student-mini.firebaseapp.com",
  databaseURL: "https://student-mini.firebaseio.com",
  projectId: "student-mini",
  storageBucket: "",
  messagingSenderId: "1046583006684",
  appId: "1:1046583006684:web:4e8b0d871c6cbc3555eb19"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
