import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: 'AIzaSyBQ4ofH5RPc4x850ufHA1C-zDfEaM_k5R0',
  authDomain: 'global-chat-hub-a5362.firebaseapp.com',
  projectId: 'global-chat-hub-a5362',
  storageBucket: 'global-chat-hub-a5362.appspot.com',
  messagingSenderId: '984932920845',
  appId: '1:984932920845:web:e33f7311cf2231b7ed2f44',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
