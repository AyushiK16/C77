import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDBa98MW_1SE6BIL2CRsHWP-ZHmclX0uxI",
    authDomain: "booksanta-82ae3.firebaseapp.com",
    projectId: "booksanta-82ae3",
    storageBucket: "booksanta-82ae3.appspot.com",
    messagingSenderId: "1092199123993",
    appId: "1:1092199123993:web:eecd2136650e134050ee88"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
