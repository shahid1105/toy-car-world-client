// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL8dymz2j4jlyqQLrxUcDD_QeyQ3uuJwo",
    authDomain: "toy-car-world.firebaseapp.com",
    projectId: "toy-car-world",
    storageBucket: "toy-car-world.appspot.com",
    messagingSenderId: "486496180436",
    appId: "1:486496180436:web:013015ffc7cb7a482fc341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;