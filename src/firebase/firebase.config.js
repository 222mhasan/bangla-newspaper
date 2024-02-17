// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log(import.meta.env.VITE_PASS);

const firebaseConfig = {
  apiKey: import.meta.env.VITe_APIKEY,
  authDomain: import.meta.env.VITe_AUTHDOMAIN,
  projectId: import.meta.env.VITe_PROJECTID,
  storageBucket: import.meta.env.VITe_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITe_MESSAGINGSENDERID,
  appId: import.meta.env.VITe_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;