import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3AVr0xq7Turrc7j90VSA-DGnxgdtSc5Y",
  authDomain: "exchangehub-19776.firebaseapp.com",
  projectId: "exchangehub-19776",
  storageBucket: "exchangehub-19776.appspot.com",
  messagingSenderId: "215598962777",
  appId: "1:215598962777:web:d5c9747da07dda9ae4f948",
  measurementId: "G-GHPE85FDVT"
};

initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore();

