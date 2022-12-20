import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPaDPHqIQ22iffWOHrt2S7Da1fbI0nQZA",
  authDomain: "meublog-5d130.firebaseapp.com",
  projectId: "meublog-5d130",
  storageBucket: "meublog-5d130.appspot.com",
  messagingSenderId: "916390713832",
  appId: "1:916390713832:web:52b9f60f68ce2c5045ec5d"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }