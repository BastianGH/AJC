import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFsj8W7tCqCpL9fiF-ONigbRfcii1HNgw",
  authDomain: "write-node-79bea.firebaseapp.com",
  projectId: "write-node-79bea",
  storageBucket: "write-node-79bea.appspot.com",
  messagingSenderId: "307515418271",
  appId: "1:307515418271:web:4a02f3859fe8fb479964aa",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export { app, db };
