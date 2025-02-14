// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHyv2fMbb2gwUBF5YAVJQRYD8QSwV1-o4",
  authDomain: "resoluteai-5f44f.firebaseapp.com",
  projectId: "resoluteai-5f44f",
  storageBucket: "resoluteai-5f44f.firebasestorage.app",
  messagingSenderId: "169955668133",
  appId: "1:169955668133:web:b2934c02fa1824e7249d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);