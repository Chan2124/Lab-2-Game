import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

  // Your Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyA05kJ1UDPnYdfX4YZg1GF20551gxRQXXc",
    authDomain: "app-dev-lab-2.firebaseapp.com",
    projectId: "app-dev-lab-2",
    storageBucket: "app-dev-lab-2.appspot.com", // fixed .app to .appspot.com
    messagingSenderId: "455125652420",
    appId: "1:455125652420:web:2b46ee5438da600e7f0a91",
    measurementId: "G-7ZCPHTPF1D"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // LOGIN FUNCTION
  document.getElementById("login-btn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully logged in
        alert("Welcome back!");
        window.location.href = "landingpage(existing).html"; // redirect to landing page
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  });