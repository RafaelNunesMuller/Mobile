// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp0eEwMzKiXMBh192hpJHK4uaJiFWiG7o",
  authDomain: "aulasm2025-5b9d1.firebaseapp.com",
  projectId: "aulasm2025-5b9d1",
  storageBucket: "aulasm2025-5b9d1.firebasestorage.app",
  messagingSenderId: "503940816218",
  appId: "1:503940816218:web:b6e65aadfb4ddb5763a763"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);