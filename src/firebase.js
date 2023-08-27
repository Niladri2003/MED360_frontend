import firebase from "firebase/compat/app"

import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

firebase.initializeApp({
  apiKey: "AIzaSyBcjX06mDxylhyJv-UCQX3LKMZS67Eqx5k",
  authDomain: "hospital-management-e7704.firebaseapp.com",
  databaseURL: "https://hospital-management-e7704-default-rtdb.firebaseio.com",
  projectId: "hospital-management-e7704",
  storageBucket: "hospital-management-e7704.appspot.com",
  messagingSenderId: "155704977960",
  appId: "1:155704977960:web:2ab8658940a48a3bbda31d",
  measurementId: "G-YLJKZ4N9FY",
})

const fireb = firebase

export default fireb
