// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5HsZJ8v_Jd4UeO3ARhxeD48tExKERl1c",
  authDomain: "weonlinecoaching-2169a.firebaseapp.com",
  projectId: "weonlinecoaching-2169a",
  storageBucket: "weonlinecoaching-2169a.firebasestorage.app",
  messagingSenderId: "505964992338",
  appId: "1:505964992338:web:65fd7af20508dd8c234c8b",
  measurementId: "G-257B1DW2VK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);

// Enable offline persistence when possible
try {
  enableIndexedDbPersistence(db);
} catch (error) {
  console.error("Error enabling offline persistence:", error);
}

export { firebaseApp, analytics, db }; 