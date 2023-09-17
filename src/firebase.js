// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUX887579Vzzj1EOWb4eTnhYcJ-fjwyoY",
  authDomain: "react-notes-7415c.firebaseapp.com",
  projectId: "react-notes-7415c",
  storageBucket: "react-notes-7415c.appspot.com",
  messagingSenderId: "190476865318",
  appId: "1:190476865318:web:dc14bfecdd73449b2f7be7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
