import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDw_KxfNYn1W3Yq9GTKw7MUFs2O0wrLUyA',
  authDomain: 'pratik-ghosalkar.firebaseapp.com',
  databaseURL: 'https://pratik-ghosalkar.firebaseio.com',
  projectId: 'pratik-ghosalkar',
  storageBucket: 'pratik-ghosalkar.appspot.com',
  messagingSenderId: '220121609572',
  appId: '1:220121609572:web:7b5257af38b56a68b43671',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
