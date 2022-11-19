import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyApCHdjd8b7Ckf3qM9hCP_h98tstnls86U",
    authDomain: "zuzus-6dd5e.firebaseapp.com",
    projectId: "zuzus-6dd5e",
    storageBucket: "zuzus-6dd5e.appspot.com",
    messagingSenderId: "98976351508",
    appId: "1:98976351508:web:4faae5dbe94a43510bae01",
};

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, db, storage, provider, auth };
