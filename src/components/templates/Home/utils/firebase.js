import firebase from 'firebase';
import 'firebase/analytics';

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
if(typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    if('measurementId' in firebaseConfig) firebase.analytics()
}

export default firebase
