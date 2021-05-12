import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyA8xu3d15RI47_RXOQuL2GZ5oQpeaiajSo',
  authDomain: 'hackathon-1-wcs-763ca.firebaseapp.com',
  databaseURL:
    'https://hackathon-1-wcs-763ca-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'hackathon-1-wcs-763ca',
  storageBucket: 'hackathon-1-wcs-763ca.appspot.com',
  messagingSenderId: '816288522949',
  appId: '1:816288522949:web:5c6eac811ac46fed3a46ac',
  measurementId: 'G-S2YVPEWJS6',
});

export const EmailProvider = new firebase.auth.EmailAuthProvider();

export const auth = firebaseConfig.auth();
export const firestore = firebaseConfig.firestore();
export default firebaseConfig;
