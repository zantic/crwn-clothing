import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDxA586N_U-xgypKmwcyXgggnQUxwbkRnI',
  authDomain: 'crowndb-3827c.firebaseapp.com',
  projectId: 'crowndb-3827c',
  storageBucket: 'crowndb-3827c.appspot.com',
  messagingSenderId: '444170947060',
  appId: '1:444170947060:web:e54b13dab8892dc028d1a1',
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
