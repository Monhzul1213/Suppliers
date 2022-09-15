import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs, updateDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoHFNtze2u01yMB2HH7-N76s_1fX3kGrg",
  authDomain: "ultimatevendorweb.firebaseapp.com",
  projectId: "ultimatevendorweb",
  storageBucket: "ultimatevendorweb.appspot.com",
  messagingSenderId: "38110257902",
  appId: "1:38110257902:web:5f825e30bf2f2d6e0309ff",
  measurementId: "G-4QZQVDV9XH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return Promise.resolve({ error: false  ?? 'Алдаа гарлаа.'});
  } catch (err) {
    console.error('=========', JSON.stringify(err));
    return Promise.resolve({ error: err.code });
  }
};

export const signUp = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    user.updateDisplayName('Admin');
    await getDocs(collection(db, 'users'), {
      uid: user.uid, authProvider: "local", email, name: 'Admin'
    });
    return Promise.resolve({ error: false });
  } catch (err) {
    console.error(err);
    return Promise.resolve({ label: err.code });
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