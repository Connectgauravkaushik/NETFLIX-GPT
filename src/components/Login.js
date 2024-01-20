import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>

      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"></img>
      </div>

      <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0  text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          < input type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-800" />
        )}


        <input type="text"
          placeholder="Email or Phone Number"
          className="p-4 my-4 w-full bg-slate-800" />

        <input type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-slate-800" />

        <button
          className="p-4 my-6  bg-red-500 rounded-sm w-full">
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
