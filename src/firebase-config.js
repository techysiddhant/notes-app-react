
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMJlNWpXHbOSJqj0cegv17_OXwHPT8Wr0",
  authDomain: "notes-app-c5fcd.firebaseapp.com",
  projectId: "notes-app-c5fcd",
  storageBucket: "notes-app-c5fcd.appspot.com",
  messagingSenderId: "722981782060",
  appId: "1:722981782060:web:cb5f3f635e95225a51c789"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db}