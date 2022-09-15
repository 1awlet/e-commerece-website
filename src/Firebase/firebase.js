import { initializeApp } from "firebase/app";
import {signInWithPopup, getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCcNEyeqS58NI0VFS8zAbLPnMG-Jrwn1J4",
  authDomain: "myshop-ef26e.firebaseapp.com",
  projectId: "myshop-ef26e",
  storageBucket: "myshop-ef26e.appspot.com",
  messagingSenderId: "961459795324",
  appId: "1:961459795324:web:01cf0654ebd613b5c4e0f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth = getAuth();


let provider = new GoogleAuthProvider();
provider.setCustomParameters(
  {
    prompt:'select_account'
  }
)

export const signINWithGoogle = ()=> signInWithPopup(auth, provider);
