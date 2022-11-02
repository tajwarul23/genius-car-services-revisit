// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhuGWDjmVULcRLB_fwOogg0ZS9QFNiyTg",
  authDomain: "genius-car-services-63eee.firebaseapp.com",
  projectId: "genius-car-services-63eee",
  storageBucket: "genius-car-services-63eee.appspot.com",
  messagingSenderId: "779930738358",
  appId: "1:779930738358:web:94f07585b9037f4deed017"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;