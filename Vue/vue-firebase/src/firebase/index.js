// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK3bBQfCyyhvXT-ecrao_Ts-i7QXGZHBo",
  authDomain: "badass-todo-2604d.firebaseapp.com",
  projectId: "badass-todo-2604d",
  storageBucket: "badass-todo-2604d.appspot.com",
  messagingSenderId: "226402401329",
  appId: "1:226402401329:web:5be93363a6ef4286e66910",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
