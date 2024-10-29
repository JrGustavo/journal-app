import {doc, collection, setDoc} from 'firebase/firestore/lite'
import {FirebaseDB} from "../../firebase/config.js";
import {
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotsToActiveNote,
    setSaving,
    updateNote
} from "./journalSlice.js";
import {loadNotes} from "../../helpers/index.js";
import * as fileUpload from 'express-fileupload';


export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const newDoc = doc( collection(FirebaseDB, `${uid}/journal/notas`))
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))

    };
};

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;
        if(!uid) throw new Error('El UID del usuario no existe')

       const notes = await loadNotes(uid)
        dispatch(setNotes(notes))

    };
};


export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving())


        const {uid} = getState().auth;
        const {active:note} = getState().journal();

        const noteToFireStore = {...note}
        delete noteToFireStore.id

        const docRef = doc(FirebaseDB, `${uid}/journal/notas/${note.id}`)
        await setDoc(docRef, noteToFireStore, {merge: true})

        dispatch(updateNote(note))
    };
}


export const startUploadingFiles = (files = []   ) => {
    return async(dispatch) => {
        dispatch(setSaving())

        const fileUploadPromises = []

        for (const file of files) {
            fileUploadPromises.push( fileUpload(file))
        }

      const photosUrls =  await Promise.all(fileUploadPromises)


        dispatch(setPhotsToActiveNote(photosUrls))
    }



}