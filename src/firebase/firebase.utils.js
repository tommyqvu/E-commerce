import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDFijGr9bEqjhBHff81v-VQQ_EfJTGY3nI',
  authDomain: 'crown-db-468d5.firebaseapp.com',
  databaseURL: 'https://crown-db-468d5.firebaseio.com',
  projectId: 'crown-db-468d5',
  storageBucket: '',
  messagingSenderId: '938931048440',
  appId: '1:938931048440:web:cd5d35696aa85623',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
