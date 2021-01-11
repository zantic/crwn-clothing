import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDxrqETXddofLxR7o7HaEb6FuOqnOgktlA",
    authDomain: "crown-db-a8dd3.firebaseapp.com",
    projectId: "crown-db-a8dd3",
    storageBucket: "crown-db-a8dd3.appspot.com",
    messagingSenderId: "843328556438",
    appId: "1:843328556438:web:29914dd82c43acd2fb21b7"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
