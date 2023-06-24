// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEJW7QblB9pR5Ywp2bnYgtAtL-_0JnO1M",
  authDomain: "email-password-auth-3bf52.firebaseapp.com",
  projectId: "email-password-auth-3bf52",
  storageBucket: "email-password-auth-3bf52.appspot.com",
  messagingSenderId: "824348225024",
  appId: "1:824348225024:web:f0956d60d880af7e30b2e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app