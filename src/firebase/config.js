import { initializeApp } from "firebase/app";
import {getAuth}  from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBx4wwueNhsWgK-dZJJOfX8FV1kAvQIrAM",
    authDomain: "react-cursos-5bca9.firebaseapp.com",
    projectId: "react-cursos-5bca9",
    storageBucket: "react-cursos-5bca9.appspot.com",
    messagingSenderId: "1008016844243",
    appId: "1:1008016844243:web:1d9386b73b5a5c1202bb26",
    measurementId: "G-542T81ZY0V"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth (FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)

