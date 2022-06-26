// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsipmmWmDBJKj6cy6GzszyGpdVma3z12c",
  authDomain: "justappin-e499e.firebaseapp.com",
  projectId: "justappin-e499e",
  storageBucket: "justappin-e499e.appspot.com",
  messagingSenderId: "1084760364098",
  appId: "1:1084760364098:web:4e0958bfe2513f5cfd09db",
  measurementId: "G-PJ4J2CWPX6",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initializr Firebase Service
export const auth = getAuth(app);
// export const token = getIdToken(false);
const analytics = getAnalytics(app);
export default app;
