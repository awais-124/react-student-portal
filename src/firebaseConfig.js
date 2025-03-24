import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_DOMAIN_NAME',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: '_YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSENGER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
