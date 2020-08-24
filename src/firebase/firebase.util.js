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
//to save user data in firebase database if it already doesnot exists
export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);//documentrefrence objecet which is not actual data
    const snapShot=await userRef.get();//snapshot obj which is actuual data we use .get method on refrence obj to get snapshot obj.with snapshot obj we can take name,email,etc and store in firebase database
    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
       await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })}
        catch(err){
            console.log("error creating user",err.message);
        }
    }
    return userRef;
    

}
export const convertCollectionsSnapShotToMap=(collections)=>{
    const transformedCollection=collections.docs.map(doc=>{
        const{title,items}=doc.data();
        return{
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()]=collection;
        return accumulator;
    },{})

}
export const addCollectionsAndDocuments=async (collectionKey,objectsToAdd)=>{    //this methods add our shop data to the firestore taking collectionkey like hats ,sneaker,mens,womens ,etc and objects to nadd and stores in database
    const CollectionRef=firestore.collection(collectionKey);
    const batch=firestore.batch();
    objectsToAdd.forEach(obj=>{
        const newDocRef=CollectionRef.doc();
        batch.set(newDocRef,obj)
    });
    return await batch.commit();
}
firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;
