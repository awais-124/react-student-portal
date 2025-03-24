import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/* MINE */
const firebaseConfig = {
  apiKey: 'AIzaSyBfZdxN2Y0wxstM0KfEIZ4Ew5rAyajLh6A',
  authDomain: 'student-portal-34800.firebaseapp.com',
  projectId: 'student-portal-34800',
  storageBucket: 'student-portal-34800.appspot.com',
  messagingSenderId: '894551593062',
  appId: '1:894551593062:web:94ad5dc02b4fdbab999da7',
};

/* RANDOM */
// const firebaseConfig = {
//   apiKey: 'AIzaSyBFbrhz5hqo6aLPajiIRDF-Anc7hukB4Jc',
//   authDomain: 'student-portal-7056c.firebaseapp.com',
//   projectId: 'student-portal-7056c',
//   storageBucket: 'student-portal-7056c.firebasestorage.app',
//   messagingSenderId: '854974823090',
//   appId: '1:854974823090:web:62c2ffde70b6817a5a67ab',
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
