// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkRQIQJ9X-nTQH-xEQ7fwUv_1dxuckyQk",
  authDomain: "netflixgpt-95ecd.firebaseapp.com",
  projectId: "netflixgpt-95ecd",
  storageBucket: "netflixgpt-95ecd.firebasestorage.app",
  messagingSenderId: "649144456296",
  appId: "1:649144456296:web:1b74fb80ca2e5073be17dd",
  measurementId: "G-BF0WTENQQP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
