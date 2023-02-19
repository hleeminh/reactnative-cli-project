import { initializeApp } from 'firebase/app';
import {
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import {
    getDatabase, 
    ref as firebaseDatabaseRef, 
    set as firebaseSet,
    child,
    get,
    onValue
} from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAZFH8iMQKS-G0L2trp0n2x8O5_oGTdsKM",
    authDomain: "cliproject-a822d.firebaseapp.com",
    databaseURL: "https://cliproject-a822d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cliproject-a822d",
    storageBucket: "cliproject-a822d.appspot.com",
    messagingSenderId: "1071977090876",
    appId: "1:1071977090876:android:ec6014745396ee705bd839",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase()

export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    sendEmailVerification,
    signInWithEmailAndPassword,
    child,
    get,
    onValue
}