
import * as firebase from "firebase";
import "firebase/database";

const config = {

  apiKey: "AIzaSyCbqTQof_ZLgN-4BZdoB_a91MLmmA3-Kzc",
  authDomain: "katomaran-eab74.firebaseapp.com",
  databaseURL: "https://katomaran-eab74-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "katomaran-eab74",
  storageBucket: "katomaran-eab74.appspot.com",
  messagingSenderId: "595282705934",
  appId: "1:595282705934:web:6f0199eb99ed0bfd3c065f",
  measurementId: "G-CLX32LV2LD",
};

firebase.initializeApp(config);
export default firebase.database();