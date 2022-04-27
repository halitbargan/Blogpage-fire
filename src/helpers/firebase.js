import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged,signInWithPopup,GoogleAuthProvider } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
//https://firebase.google.com/docs/auth/web/start
//https://console.firebase.google.com/project/fireblog-cceed/settings


const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId ,
  storageBucket:process.env.REACT_APP_storageBucket ,
  messagingSenderId:process.env.REACT_APP_messagingSenderId ,
  appId:process.env.REACT_APP_appId ,
  databaseURL:process.env.REACT_APP_databaseURL,

};
// const firebaseConfig = {
//     apiKey: "AIzaSyDK3lVerlK3rzfIkimtIql1nVQn1legt_4",
//     authDomain: "fireblog-cceed.firebaseapp.com",
//     projectId: "fireblog-cceed",
//     storageBucket: "fireblog-cceed.appspot.com",
//     messagingSenderId: "950015069539",
//     appId: "1:950015069539:web:af12afc460fd48bad6d756"
//   };

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password,navigate,displayName)=>{
   try {
    let userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName:displayName
    })
      
    navigate("/login");
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
};

export const userObserver = (setCurrentUser)=>{
  onAuthStateChanged(auth, (currentuser) => {
    if (currentuser) {
      setCurrentUser(currentuser)

    } else {
      setCurrentUser(false)
    }
  });
}


export const signUpProvider=(navigate)=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    navigate("/")
  }).catch((error) => {
    // Handle Errors here.
    console.log(error)
   
  });
}
