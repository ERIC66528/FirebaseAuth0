<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBsZWjM2A3a3eyqxitZ-pHHNunUUkHjzi8",
    authDomain: "rictei-login.firebaseapp.com",
    projectId: "rictei-login",
    storageBucket: "rictei-login.firebasestorage.app",
    messagingSenderId: "473481614209",
    appId: "1:473481614209:web:ea5318c848f42fd0368e80",
    measurementId: "G-0QEGDBRJDV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>



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
