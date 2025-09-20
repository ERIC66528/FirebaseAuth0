import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBsZWjM2A3a3eyqxitZ-pHHNunUUkHjzi8",
  authDomain: "rictei-login.firebaseapp.com",
  projectId: "rictei-login",
  storageBucket: "rictei-login.appspot.com",
  messagingSenderId: "473481614209",
  appId: "1:473481614209:web:ea5318c848f42fd0368e80",
  measurementId: "G-0QEGDBRJDV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const status = document.getElementById("status");
const profile = document.getElementById("profile");
const userPic = document.getElementById("userPic");
const userEmail = document.getElementById("userEmail");

loginBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL
    });
    window.location.href = "https://eric66528.github.io/E-commerceweb/";
  } catch (error) {
    console.error(error);
  }
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "https://eric66528.github.io/E-commerceweb/";
  } else {
    status.textContent = "Not logged in";
    profile.style.display = "none";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
  }
});
