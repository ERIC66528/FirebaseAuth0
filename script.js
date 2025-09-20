<script type="module">
  // Import Firebase SDK
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyD***************",
    authDomain: "rictei-login.firebaseapp.com",
    projectId: "rictei-login",
    storageBucket: "rictei-login.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef12345"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Sign In with Google
  document.getElementById("loginBtn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        document.getElementById("status").innerHTML = 
          `Welcome ${user.displayName} <br> Email: ${user.email}`;
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // Sign Out
  document.getElementById("logoutBtn").addEventListener("click", () => {
    signOut(auth).then(() => {
      document.getElementById("status").innerHTML = "Logged out.";
    });
  });




import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const db = getFirestore(app);

signInWithPopup(auth, provider).then(async (result) => {
  const user = result.user;
  await setDoc(doc(db, "users", user.uid), {
    name: user.displayName,
    email: user.email,
    photo: user.photoURL
  });
});
</script>
