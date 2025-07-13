
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWKKoUXsjS3eMK_5ikyeLHUmev9_bCo4",
  authDomain: "e-commerce-otp-38802.firebaseapp.com",
  projectId: "e-commerce-otp-38802",
  storageBucket: "e-commerce-otp-38802.appspot.com",
  messagingSenderId: "405179933593",
  appId: "1:405179933593:web:a9ade782c28e9c471b4e98",
  measurementId: "G-02E8LWG06"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
