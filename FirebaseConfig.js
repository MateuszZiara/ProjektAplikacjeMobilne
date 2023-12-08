// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-NN4UJd11DTX_72sjzuoR-2H_VjF2m4M",
    authDomain: "aplikacjemobilne-ff0b1.firebaseapp.com",
    projectId: "aplikacjemobilne-ff0b1",
    storageBucket: "aplikacjemobilne-ff0b1.appspot.com",
    messagingSenderId: "449862421397",
    appId: "1:449862421397:web:65acd326a728638e84049c"
};
let app;
if(firebase.apps.length === 0)
{
    app = firebase.initializeApp(firebaseConfig);
} else
{
    app = firebase.app();
}
// Initialize Firebase
