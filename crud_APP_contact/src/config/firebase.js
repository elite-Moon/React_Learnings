// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCUVBiXMdoeyDrxYHw1uUM5SuvpvWl-QpU',
  authDomain: 'contact-crud-332d3.firebaseapp.com',
  projectId: 'contact-crud-332d3',
  storageBucket: 'contact-crud-332d3.appspot.com',
  messagingSenderId: '475941844326',
  appId: '1:475941844326:web:2dd7bbd26f78064e6e84a7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
