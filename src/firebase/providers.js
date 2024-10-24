import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
} from 'firebase/auth';
import { FirebaseAuth } from './config';

// Configuración del proveedor de Google
const googleProvider = new GoogleAuthProvider();

// Iniciar sesión con Google
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // Información del usuario
            displayName,
            email,
            photoURL,
            uid
        };
    } catch (error) {
        const errorMessage = error.message || 'Error al iniciar sesión con Google';

        return {
            ok: false,
            errorMessage
        };
    }
};

// Registro de usuario con email y contraseña
export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;

        // Actualizar el perfil del usuario registrado
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        };
    } catch (error) {
        const errorMessage = error.message || 'Error al registrar el usuario';
        console.error(errorMessage);
        return {
            ok: false,
            errorMessage
        };
    }
};

// Iniciar sesión con email y contraseña
export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid,
            photoURL,
            displayName
        };
    } catch (error) {
        const errorMessage = error.message || 'Error al iniciar sesión con email y contraseña';
        return {
            ok: false,
            errorMessage
        };
    }
};

// Cerrar sesión en Firebase
export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        return { ok: true };
    } catch (error) {
        const errorMessage = error.message || 'Error al cerrar sesión';
        return {
            ok: false,
            errorMessage
        };
    }
};