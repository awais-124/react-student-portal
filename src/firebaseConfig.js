import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'YOUR_API_KEY',
//   authDomain: 'YOUR_DOMAIN_NAME',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: '_YOUR_STORAGE_BUCKET',
//   messagingSenderId: 'YOUR_MESSENGER_ID',
//   appId: 'YOUR_APP_ID',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBfZdxN2Y0wxstM0KfEIZ4Ew5rAyajLh6A',
  authDomain: 'student-portal-34800.firebaseapp.com',
  projectId: 'student-portal-34800',
  storageBucket: 'student-portal-34800.appspot.com',
  messagingSenderId: '894551593062',
  appId: '1:894551593062:web:94ad5dc02b4fdbab999da7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
