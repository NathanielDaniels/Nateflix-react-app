import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles'
import './index.css';
import App from './App';
import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod';
// import Keys from './stash'

// import { seedDatabase } from './seed';

// const config = {
//   apiKey: Keys().apiKey,
//   projectId: Keys().projectId,
//   authDomain: "netflix-clone-639dd.firebaseapp.com",
//   databaseURL: "https://netflix-clone-639dd.firebaseio.com",
//   storageBucket: "netflix-clone-639dd.appspot.com",
//   messagingSenderId: "350534320019",
//   appId: "1:350534320019:web:72808bf152cd772fb9f266",
//   measurementId: "G-QPRM97YMQX"
// };

// const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseContext.Provider value={{ firebase: window.firebase }}> */}
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
