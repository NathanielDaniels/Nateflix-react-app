import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Keys from '../stash'

//? we need to seed the database
// import { seedDatabase } from './seed';

//? need a config
const config = {
  apiKey: Keys().apiKey,
  projectId: Keys().projectId,
  authDomain: "netflix-clone-639dd.firebaseapp.com",
  databaseURL: "https://netflix-clone-639dd.firebaseio.com",
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