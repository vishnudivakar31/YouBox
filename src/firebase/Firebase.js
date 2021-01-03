import firebase from 'firebase'
import '@firebase/firestore'
import ReduxSagaFirebase from 'redux-saga-firebase'

const {
    REACT_APP_FIREBASE_API_KEY, 
    REACT_APP_FIREBASE_AUTH_DOMAIN, 
    REACT_APP_FIREBASE_PROJECT_ID, 
    REACT_APP_FIREBASE_STORAGE_BUCKET, 
    REACT_APP_FIREBASE_MESSAGING_ID, 
    REACT_APP_FIREBASE_APP_ID
} = process.env

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_ID,
    appId: REACT_APP_FIREBASE_APP_ID
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)
