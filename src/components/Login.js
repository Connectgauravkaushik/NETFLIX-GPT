import React from "react";
import { useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BackGroundImage , ProfileImage } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const Name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    //validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
   
    if (message) return;

    if (!isSignInForm) { //sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: Name.current.value, photoURL: ProfileImage
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName
              }));

            
          }).catch((error) => {
            setErrorMessage(error.message);
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
        });
    } else { // sign In logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
      
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
        });
    }


  }

  return (
    <div>

      <Header />

      <div className="absolute">
        <img
        className="h-screen object-cover md:h-auto"
          src={BackGroundImage} alt="logo"></img>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); }} className="p-12 bg-black absolute w-full md:w-3/12 my-36 mx-auto right-0 left-0  text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          < input type="text"
            ref={Name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-800" />
        )}


        <input type="text"
          ref={email}
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-slate-800" />

        <input type="password"
          ref={password}
          placeholder="password"
          className="p-4 my-4 w-full bg-slate-800" />

        <p className="text-red-500 font-bold text-lg ">{errorMessage}</p>

        <button
          className="p-4 my-6  bg-red-500 rounded-sm w-full" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >

          {isSignInForm ? "New to Netflix ? Sign up Now" : "Already registered ? Sign In now"}
        </p>

      </form>
    </div>
  );
}

export default Login;
