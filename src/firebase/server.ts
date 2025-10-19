import { initializeApp, getApps, getApp, FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';

let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export const initializeFirebase = () => ({
  firestore,
  auth,
  firebaseApp,
});
