# A FullStack Student Portal 
## Developed using React.js and Firebase
> ### Contains three modules
- Student
- Teacher
- Admin

---

> ### To Get Started you need to setup your own Firebase Project and copy configuration details form there and Update `firebaseConfig.js` accordingly.
> 
```js
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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
```

> Steps to get started:
- Go to register admin Page(route = '/register')
- Register as admin
- Once registered, login as admin
- From admin dashboard, you can add dummy data via UI buttons added against each side link.
- This will create your database and seed it with dummy data, then you can login as student or teacher, by checking login from code or firebase.
- Then you are good to go.

---


> ## Pre-requisistes
- Nodejs
- npm or yarn
- react
- firebase project


> ## To Get Started 
- clone the repo `git clone https://github.com/awais-124/react-student-portal.git`
- run `npm install`
- run `npm start` to start development server. Headover to `localhost:3000` to see it live.
- run `npm run build` to create build directory.
- You are good to go.

