import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseApp = fb.initializeApp({
  apiKey: "AIzaSyAGpw6YkyfE7mIuA_bPXup3bsIFWesXL9s",
  authDomain: "test-6dfd5.firebaseapp.com",
  projectId: "test-6dfd5",
  storageBucket: "test-6dfd5.appspot.com",
  messagingSenderId: "499387571279",
  appId: "1:499387571279:web:b0ec44bb78999df99a5e3a",
  measurementId: "G-LZ9VYHZSGG"
});


const logoutUser = () => {
  signOut(auth);
};

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

//  const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
//  const db = getFirestore();
//  const auth = getAuth(app);

export { db, auth, storage, fb, logoutUser };
