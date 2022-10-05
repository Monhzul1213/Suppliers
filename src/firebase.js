import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs, updateDoc, setDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDoHFNtze2u01yMB2HH7-N76s_1fX3kGrg",
//   authDomain: "ultimatevendorweb.firebaseapp.com",
//   projectId: "ultimatevendorweb",
//   storageBucket: "ultimatevendorweb.appspot.com",
//   messagingSenderId: "38110257902",
//   appId: "1:38110257902:web:5f825e30bf2f2d6e0309ff",
//   measurementId: "G-4QZQVDV9XH"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBiLs5ZVLHORNLno0WtIv4abeYh1oojKhk",
  authDomain: "ultimatevendorwebtest.firebaseapp.com",
  projectId: "ultimatevendorwebtest",
  storageBucket: "ultimatevendorwebtest.appspot.com",
  messagingSenderId: "290240407231",
  appId: "1:290240407231:web:0aae3b50013031ec51080a",
  measurementId: "G-V6P4QY6KEY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
 
  } catch (err) {
    console.error( err );
      
   
    if(!email){
      return Promise.resolve({ error: 'Хэрэглэгч бүртгэлгүй байна.' });
    } else if(email !== password)
      return Promise.resolve({ error: 'Хэрэглэгчийн нууц үг буруу байна.' });
      else{ 
      
      return Promise.resolve({email})
    }
    return Promise.resolve({ error: err.code });
  }
};


export const logout = () => {
  signOut(auth);
};
export function useAuth(){
  const[user, setUser]= useState();
  useEffect(() =>{
   const unsub = onAuthStateChanged(auth, curuser=> setUser(curuser));
   return unsub;
  }, []);
  return user;
}