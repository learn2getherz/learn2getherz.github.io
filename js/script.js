import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const firebaseConfig = {
  // Your Firebase project config
  apiKey: "AIzaSyCeER56U-PYQC_lg6sZJWcf1KEXvmvEbQw",
  authDomain: "learnwithme-e96d0.firebaseapp.com",
  projectId: "learnwithme-e96d0",
  storageBucket: "learnwithme-e96d0.appspot.com",
  messagingSenderId: "977443361893",
  appId: "1:977443361893:web:87d6dc6d3341c3e4ad628c",
  measurementId: "G-LLRFVB2HL5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Google sign-in button click
const googleSignInBtn = document.getElementById("google-sign-in-btn");
googleSignInBtn.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const userInfo = document.getElementById("user-info");
      userInfo.innerHTML = `Logged in as ${user.displayName} (${user.email})`;
    })
    .catch((error) => {
      console.error(`Error signing in with Google: ${error.message}`);
    });
});
