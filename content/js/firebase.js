// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuVRJlzxDs2DluslmWuPjpjTco05vn_8Q",
  authDomain: "pro124-c328c.firebaseapp.com",
  projectId: "pro124-c328c",
  storageBucket: "pro124-c328c.firebasestorage.app",
  messagingSenderId: "48338501808",
  appId: "1:48338501808:web:c13908857563e4ddb73b75"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
