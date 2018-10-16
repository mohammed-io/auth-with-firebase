import Firebase from "firebase";

export const FireApp = Firebase.initializeApp({
    apiKey: "AIzaSyBERGeIGJsqTpvoxzf8SEPckU94naKIAj8",
    authDomain: "finale-7c39c.firebaseapp.com",
    databaseURL: "https://finale-7c39c.firebaseio.com",
    projectId: "finale-7c39c",
    storageBucket: "",
    messagingSenderId: "593203206148"
})

export const Auth = FireApp.auth();

const Firestore = FireApp.firestore();
Firestore.settings({ timestampsInSnapshots: true })

export {
    Firestore
}