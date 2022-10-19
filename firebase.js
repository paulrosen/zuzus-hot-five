import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgEAzlrdq8FZY-DmLgMAnvseqzdFcnCFs",
    authDomain: "snackbar-fb7a9.firebaseapp.com",
    projectId: "snackbar-fb7a9",
    storageBucket: "snackbar-fb7a9.appspot.com",
    messagingSenderId: "954847309694",
    appId: "1:954847309694:web:f704a70b99c720dc700d2f",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
