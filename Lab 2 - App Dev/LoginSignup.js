// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA05kJ1UDPnYdfX4YZg1GF20551gxRQXXc",
  authDomain: "app-dev-lab-2.firebaseapp.com",
  projectId: "app-dev-lab-2",
  storageBucket: "app-dev-lab-2.appspot.com", // fixed .app to .appspot.com
  messagingSenderId: "455125652420",
  appId: "1:455125652420:web:2b46ee5438da600e7f0a91",
  measurementId: "G-7ZCPHTPF1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // You missed initializing `auth`

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      // Redirect after successful signup
      window.location.href = "landingpage(new).html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});
