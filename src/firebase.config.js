// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk1VArrY2_SVB8sR6f7b2ms9h4jtdhlaE",
  authDomain: "paysafe-authentication.firebaseapp.com",
  projectId: "paysafe-authentication",
  storageBucket: "paysafe-authentication.firebasestorage.app",
  messagingSenderId: "355783777685",
  appId: "1:355783777685:web:8be6f0a9602e8908db2a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;