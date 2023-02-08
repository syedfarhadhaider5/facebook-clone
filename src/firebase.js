import  firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAF2hyUax59U9XgDnRuaKCaksT1tfIiP-I",
    authDomain: "my-facebook-app-db8ca.firebaseapp.com",
    projectId: "my-facebook-app-db8ca",
    storageBucket: "my-facebook-app-db8ca.appspot.com",
    messagingSenderId: "902143194060",
    appId: "1:902143194060:web:a93ae936f20b4998b46369",
    measurementId: "G-LYFM79GCLJ"
  };
  const app = firebase.initializeApp(firebaseConfig)
    const db = app.firestore();
    const auth = firebase.auth();
    const provider =  new firebase.auth.GoogleAuthProvider() 
    
    export {auth, provider}
    export default db