import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const fbConfig = {
  apiKey: "AIzaSyATMQ4QokUrf9_VCEEUOKhtaYgMCEcRPQs",
  authDomain: "mondy-sproject.firebaseapp.com",
  databaseURL: "https://mondy-sproject.firebaseio.com",
  projectId: "mondy-sproject",
  storageBucket: "mondy-sproject.appspot.com",
  messagingSenderId: "913086197917",
  appId: "1:913086197917:web:beec9882ff81ab03176474",
  measurementId: "G-BTM0C1Y4E0"
};
// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;
