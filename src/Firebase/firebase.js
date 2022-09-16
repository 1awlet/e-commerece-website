import { initializeApp } from "firebase/app";
import {signInWithPopup, getAuth, GoogleAuthProvider,
signInWithEmailAndPassword,
createUserWithEmailAndPassword
} from 'firebase/auth';
import {doc, setDoc, getDoc, getFirestore} from 'firebase/firestore';

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

const auth = getAuth();

const db =  getFirestore();


const provider = new GoogleAuthProvider();
provider.setCustomParameters(
  {
    prompt:'select_account'
  }
)



export const SingINWithGoogle= async ()=> signInWithPopup(auth, provider);

export const emailAndPassAuth = (email, password)=>{
if(!email || !password) return

return createUserWithEmailAndPassword(auth, email, password);

}

export const signInEmailAndPass = async (email, password)=>{
  if(!email || !password) return

  return signInWithEmailAndPassword(auth, email, password);

}



export const createUser = async (auth, others={})=>{
  let {displayName, email}=  auth;
  console.log(others.displayName)
  if(displayName == null){
    displayName= others.displayName;
  }
  let currentDate = new Date();

  let Userinfo = await doc(db,'users',auth.uid);

  let Snapshot = await getDoc(Userinfo)

 console.log( Snapshot.exists())
 console.log()
 if(!Snapshot.exists()){

  await setDoc(Userinfo,{
    displayName,
    email,
    currentDate
   
  });
console.log('Thanks for signing up')

 }else{
  console.log('User already exists')
 }


}

