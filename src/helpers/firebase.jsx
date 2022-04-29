import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import Toastify from "./toastNotify";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate("/login");
    Toastify("Login Successfully");
  } catch (error) {
    alert(error.message);
  }
};
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential);
    navigate("/");
    Toastify("Sign in Successfully");
  } catch (error) {
    alert(error.message);
  }
};
export const logOut = () => {
  signOut(auth);
  Toastify("Succesfully LogOut");
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};

export const signUpProvider = (navigate) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      Toastify("Sign in Successfully");
    })

    .catch((error) => {
      console.log(error);
    });
};
