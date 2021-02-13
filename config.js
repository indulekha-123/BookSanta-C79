import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD0oVTnpqpOIx-UWgbl8e9U3tSeKuSlm-E",
  authDomain: "book-santa-d4959.firebaseapp.com",
  projectId: "book-santa-d4959",
  storageBucket: "book-santa-d4959.appspot.com",
  messagingSenderId: "796400039985",
  appId: "1:796400039985:web:4744b23bd77af73bb93d10"
};


  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();