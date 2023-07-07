import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjyHVDgCELrAHBEQ42BIIHZqcqMT5y8Po",
  authDomain: "movie-app-2d141.firebaseapp.com",
  projectId: "movie-app-2d141",
  storageBucket: "movie-app-2d141.appspot.com",
  messagingSenderId: "197027779559",
  appId: "1:197027779559:web:73efaffe8b4e832eb2e342",
  measurementId: "G-XJXY9D8S3M",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
