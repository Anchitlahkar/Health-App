import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDI4XrDAeLCbuc3UO9f09bfDlHZS6JzUNU",
    authDomain: "health-app-a6f38.firebaseapp.com",
    projectId: "health-app-a6f38",
    storageBucket: "health-app-a6f38.appspot.com",
    messagingSenderId: "854024371451",
    appId: "1:854024371451:web:0dbc462a56953f53be045e",
    measurementId: "G-79G91FJ98W"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
