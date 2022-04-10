//firebase

import { initializeApp } from "firebase";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZpcejdunWhUK7fcitwJ3XKOO_-E2u9Mw",
  authDomain: "product-1-ce65d.firebaseapp.com",
  projectId: "product-1-ce65d",
  storageBucket: "product-1-ce65d.appspot.com",
  messagingSenderId: "684709733624",
  appId: "1:684709733624:web:89ada8d265a95479e6c70d",
  measurementId: "G-EH76K7P2HT",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

export const singUp = async (name, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
  updateCurrentUser(auth, { displayName: name });
};
export const singIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};
