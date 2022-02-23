import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyChSTZTgD2M0qWt9fFr6zf9lCiHf_nFnBw",
    authDomain: "artistree-d4b5b.firebaseapp.com",
    projectId: "artistree-d4b5b",
    storageBucket: "artistree-d4b5b.appspot.com",
    messagingSenderId: "169621638063",
    appId: "1:169621638063:web:a3b7b77aa7081679cffd5a",
    measurementId: "G-ZPTGSPBCK7"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);
  export const db = getFirestore();
  export const auth = getAuth(app);