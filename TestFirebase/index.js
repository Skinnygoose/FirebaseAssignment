// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-l2n_XEynKC-vkVw3WC-TXHqSnc09nY4",
  authDomain: "testfirebase-62419.firebaseapp.com",
  databaseURL: "https://testfirebase-62419-default-rtdb.firebaseio.com",
  projectId: "testfirebase-62419",
  storageBucket: "testfirebase-62419.appspot.com",
  messagingSenderId: "880938864799",
  appId: "1:880938864799:web:631185236aee4c97ab92aa",
  measurementId: "G-Y74K1BHSHN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

const messages = ref(database, "/Message");

onValue(
  messages,
  (snapshot) => {
    console.log(snapshot);

    const ul = document.getElementById("messages");
    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {
      console.log(childSnapshot.key);
      console.log(childSnapshot.val());

      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();

      const text = document.createTextNode(childData.message);
      const li = document.createElement("li");

      li.appendChild(text);
      ul.appendChild(li);
    });
  },
  {
    onlyOnce: false,
  }
);
