import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  getDocs,
  doc,
  deleteDoc,
  Timestamp,
  orderBy,
} from "firebase/firestore";
import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { v4 as uuid } from "uuid";
import { Navigate } from "react-router-dom";

//*----Auth----
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/dashboard");
    console.log(userCredential);
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};

export const logOut = (navigate) => {
  signOut(auth);
  navigate("/login");
};

export const signUpWithGoogle = async (navigate) => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, uid } = user;
      setCurrentUser({ email, uid });
      console.log(user);
    } else {
      setCurrentUser(false);
      console.log("user sign out");
    }
  });
};

//*-----Database----
//?--ADD--
export const addBlog = async (title, image, blogText) => {
  const blogId = uuid();
  try {
    const docRef = await addDoc(collection(db, "newBlog/"), {
      title: title,
      image: image,
      blogText: blogText,
      authorId: auth.currentUser.uid,
      postId: blogId,
      date: Timestamp.now(),
    });
  } catch (error) {
    console.log(error);
  }
};

//?--READ--

export const readBlog = async (setBlog) => {
  await getDocs(collection(db, "newBlog"), orderBy("date")).then(
    (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlog(newData);
      // console.log(newData);
    }
  );
};

//?--DELETE--

export const deleteBlog = async (navigate, blogId) => {
  try {
    const deletePost = doc(db, "newBlog", blogId);
    await deleteDoc(deletePost);
    navigate("/dashboard");
  } catch (error) {
    console.log(error.message);
  }
};
