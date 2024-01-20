import React from "react";
import { useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
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
    console.log(message);

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
            displayName: Name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName
              }));

            navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          console.log(user);

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
          console.log(user);
          navigate("/browse");
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
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); }} className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0  text-white bg-opacity-80">
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
