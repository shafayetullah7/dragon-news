// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log('env : ',import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};
// VITE_PASS=SECRET
// VITE_APIKEY=AIzaSyDD5-jkBbopHl470n3vWO7pSqFDPu32hRs
// VITE_AUTHDOMAIN=practice-2-93b86.firebaseapp.com
// VITE_PROJECTID=practice-2-93b86
// VITE_STORAGEBUCKET=practice-2-93b86.appspot.com
// VITE_MESSAGINGSENDERID=370992960175
// VITE_APPID=1:370992960175:web:d93f38d52b59b41a5d3a5a
// Initialize Firebase
export const app = initializeApp(firebaseConfig);