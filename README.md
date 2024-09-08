# A FullStack Student Portal 
## Developed using React and Firebase
> ### Contains three modules
- Admin
- Student
- Teacher

> ### To Get Started you need to setup Firebase Project
> #### Update `firebaseConfig.js` accordingly.
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

> ## Pre-requisistes
- Nodejs
- npm or yarn
- react
- firebase account
- firebase CLI
- Git

> ## To Get Started 
- clone the repo `git clone https://github.com/awais-124/react-student-portal.git`
- run `npm install`
- run `npm start` to start development server. Headover to `localhost:3000` to see it live.
- run `npm run build` to create build directory.
- You are good to go.

