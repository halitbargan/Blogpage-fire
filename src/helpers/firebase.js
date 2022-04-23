import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
//https://firebase.google.com/docs/auth/web/start
//https://console.firebase.google.com/project/fireblog-cceed/settings
const firebaseConfig = {
    apiKey: "AIzaSyDK3lVerlK3rzfIkimtIql1nVQn1legt_4",
    authDomain: "fireblog-cceed.firebaseapp.com",
    projectId: "fireblog-cceed",
    storageBucket: "fireblog-cceed.appspot.com",
    messagingSenderId: "950015069539",
    appId: "1:950015069539:web:af12afc460fd48bad6d756"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password,navigate)=>{
   try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");
    console.log(userCredential);
   } catch (err) {
       alert(err.message);
   }
}
export const signIn= async(email, password,navigate)=>{
  try {
  let userCredential = await signInWithEmailAndPassword(auth, email, password);
  navigate("/");
    console.log(userCredential);
   } catch (err) {
       alert(err.message);
   }
}
export const logOut=()=>{
  signOut(auth);
  alert("logged out successfully");

}

