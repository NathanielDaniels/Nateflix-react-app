import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//we need to seed the database

// need a config
const config = {
  apiKey: "AIzaSyADx7H-z6YjmnWwN-cZymwbwjv6AT9SLSQ",
  authDomain: "netflix-clone-639dd.firebaseapp.com",
  databaseURL: "https://netflix-clone-639dd.firebaseio.com",
  projectId: "netflix-clone-639dd",
  storageBucket: "netflix-clone-639dd.appspot.com",
  messagingSenderId: "350534320019",
  appId: "1:350534320019:web:72808bf152cd772fb9f266",
  measurementId: "G-QPRM97YMQX"
};

const firebase = Firebase.initializeApp(config);

export { firebase };

//! Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();