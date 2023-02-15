import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDKuWMXkswRhFtbA4xU9H2tFg9sg05BRVo",
    authDomain: "svelte-realtime-todos-41afa.firebaseapp.com",
    projectId: "svelte-realtime-todos-41afa",
    storageBucket: "svelte-realtime-todos-41afa.appspot.com",
    messagingSenderId: "773772907819",
    appId: "1:773772907819:web:bd98bd0c37560206cd216e",
    measurementId: "G-3ZXMF0NQJJ"
  };

console.log(firebase);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase.app());

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();