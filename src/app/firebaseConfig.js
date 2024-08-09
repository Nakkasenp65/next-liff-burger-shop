import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzcmWo9V4vl8eB3QAsqoAmonKcvrHT0MM",
  authDomain: "points-nextjs-firebase.firebaseapp.com",
  projectId: "points-nextjs-firebase",
  storageBucket: "points-nextjs-firebase.appspot.com",
  messagingSenderId: "268723471613",
  appId: "1:268723471613:web:d5d42fc4c7eb6381932a94",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
