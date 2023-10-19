import { initializeApp } from 'firebase/app';
const { REACT_APP_FIREBASE_API_KEY } = process.env;

const firebaseConfig = {
  apiKey: `${REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'goose-track-final-project-goit.firebaseapp.com',
  projectId: 'goose-track-final-project-goit',
  storageBucket: 'goose-track-final-project-goit.appspot.com',
  messagingSenderId: '726960774734',
  appId: '1:726960774734:web:576c405ee449fbe4e26d1f',
};


export const app = initializeApp(firebaseConfig);
