// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzJI275ILVSAZ07-Eni4EEhRzzAsBJINs",
  authDomain: "artwrite-216100.firebaseapp.com",
  databaseURL: "https://artwrite-216100.firebaseio.com",
  projectId: "artwrite-216100",
  storageBucket: "artwrite-216100.appspot.com",
  messagingSenderId: "481737021505",
  appId: "1:481737021505:web:62e334a49cd7e8ad72cec0",
  measurementId: "G-GYTRRZT1LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;