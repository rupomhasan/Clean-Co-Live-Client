import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const all = import.meta.env


const firebaseConfig = {
  apiKey:all.VITE_apiKey,
  authDomain:all.VITE_Domain,
  projectId:all.VITE_jectId,
  storageBucket:all.VITE_Bucket,
  messagingSenderId:all.VITE_nderId,
  appId:all.VITE__appId,
  measurementId:all.VITE_mentId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
