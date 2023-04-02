
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAIzpKKqm-7qY4tTWHQM1_og-eG5Y_8MY0",
  authDomain: "tiktok---clone-76812.firebaseapp.com",
  projectId: "tiktok---clone-76812",
  storageBucket: "tiktok---clone-76812.appspot.com",
  messagingSenderId: "682276517413",
  appId: "1:682276517413:web:9f41d643042f2ecd70f1cc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;