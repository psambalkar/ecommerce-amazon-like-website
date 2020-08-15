import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
 
const config={
        apiKey: "AIzaSyCdYSG_MEs3IdsB0fIfgf2MLZBJ2fJNfgk",
        authDomain: "like-db.firebaseapp.com",
        databaseURL: "https://like-db.firebaseio.com",
        projectId: "like-db",
        storageBucket: "like-db.appspot.com",
        messagingSenderId: "279941861445",
        appId: "1:279941861445:web:2e165a833ea580d059532c",
        measurementId: "G-6C2DSF7LQE"
}
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;
