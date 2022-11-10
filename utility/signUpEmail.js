import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, provider } from "../firebase";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const signUpEmail = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // setCurrentUser(user);
            const userRef = doc(db, "users", result.user.uid);
            const userRefSnap = await getDoc(userRef);
            if (!userRefSnap.exists()) {
                //creates new user info in firestore database
                //admin must be set to true in database to allow uploading of recipes and photos
                // setIsAdmin(false);
                setDoc(doc(db, "users", result.user.uid), {
                    UID: result.user.uid,
                    name: user.displayName,
                    admin: false,
                });
            } else {
                // const userRef = doc(db, "users", result.user.uid);
                // const getTask = await getDoc(userRef).then((data) => {
                //     // setIsAdmin(data.data().admin);
                // });
            }
            return user;

            // ...
        })
        .catch((error) => {
            console.log(error);
        });
    return user;
};

export default signUpEmail;
