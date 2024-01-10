import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPgJSNhoBiRx0oiwZPaz1XCdgVxxDUTec",
  authDomain: "auth-3d3d2.firebaseapp.com",
  projectId: "auth-3d3d2",
  storageBucket: "auth-3d3d2.appspot.com",
  messagingSenderId: "284566407044",
  appId: "1:284566407044:web:0b5092aa387db63a2d7fd1",
  measurementId: "G-SZSK3KJWBG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);