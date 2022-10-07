import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs, updateDoc, setDoc } from "firebase/firestore";
import { config1 } from './helpers'

const app = initializeApp(config1?.firebaseConfig);
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