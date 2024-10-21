import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {FirebaseAuth} from "./config.js";

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

    } catch (error) {

        const errorCode = error.code
        const errorMessage = error.message


        return {
            ok: false,
            errorMessage,

        }

    }
}