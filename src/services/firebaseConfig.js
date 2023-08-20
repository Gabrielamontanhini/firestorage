// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwyLhhlxTDNLcotaD5ew2wRbnluf7iq90",
  authDomain: "chirpper-3891a.firebaseapp.com",
  projectId: "chirpper-3891a",
  storageBucket: "chirpper-3891a.appspot.com",
  messagingSenderId: "987434294846",
  appId: "1:987434294846:web:2aba8196467bf342bf7b6f",
  measurementId: "G-X4467ZH1TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export {storage, app as default}
const analytics = getAnalytics(app);
