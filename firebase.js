import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD4OTJYgAQ9biuCRyDVLxeYLPLayck3Orc",
  authDomain: "uber-eats-clone-54b9f.firebaseapp.com",
  projectId: "uber-eats-clone-54b9f",
  storageBucket: "uber-eats-clone-54b9f.appspot.com",
  messagingSenderId: "609168461141",
  appId: "1:609168461141:web:45f06dcfcd2010a72a33dc"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()

export { app, auth, provider }