import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {FirebaseAuth} from "./config.js";
import {signInWithEmailAndPassword} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider()


export const singInWithGoogle = async() => {
    try {

        const result = await  signInWithPopup(FirebaseAuth, googleProvider)
        const {displayName, email, photoURL, uid} = result.user

        return {
            ok:true,
            // User info
            displayName, email, photoURL, uid
        }

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {

        const errorCode = error.code
        const errorMessage = error.message


        return {
            ok: false,
            errorMessage,

        }

    }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try {
        console.log({email, password, displayName})
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {displayName})



    } catch (error) {
        console.log(error)
        return {ok: false, errorMessage: error.message}
    }

}

export const loginWithEmailPassword = async ({email, password}) => {


    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user;

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (error) {

        return {ok: false, errorMessage: error.message}
    }

}