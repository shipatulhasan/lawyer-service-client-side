import React, { useState } from 'react';
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import banner from "../../../asset/banner/inner_background_01.jpg";
import hero from "../../../asset/banner/hero_banner.jpg";
import { Link } from "react-router-dom";
import { useContext } from 'react';

const ResetPass = () => {

    const [error, setError] = useState("");
    const {resetPassword} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;

        resetPassword(email)
        .then(result=>{
            toast(
                "Please check your eamil fo reset link. If yor didn't found it on inbox then kindly check it on spam\n\n Thank you",
                {
                  duration: 6000,
                }
              );
              setError('')
        })
        .catch(err=>{
            const firebaseError = err.message
            const errorMsg = firebaseError.split('/')[1].replace(/[-())/]+/g,(' '))
            setError(errorMsg)
        })
    }
    return (
        <div
        className="py-20 flex flex-col justify-center min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="grid lg:grid-cols-2 justify-items-center lg:justify-items-end ">
          {/* form */}
  
          <div
            className="w-full max-w-md p-8 space-y-3 bg-slate-200 rounded-xl dark:bg-gray-900 dark:text-gray-100"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundColor: "rgb(0 0 0 / 35%)",
              backgroundBlendMode: "overlay",
            }}
          >
            <h1 className="text-xl font-bold text-center text-khaki ">
              Please provide your email address to reset your password
            </h1>
  
            <p className="text-red-600 font-semibold text-xl py-4">{error}</p>
  
            {/* google signup */}
  
            <form
              onSubmit={handleSubmit}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-base mt-8">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jhon@gmail.com"
                  required
                  className="w-full px-4 py-3 bg-slate-100 bg-opacity-20 focus:outline-none text-slate-100"
                />
              </div>
  
              <button
                type="submit"
                className="border border-khaki py-3 text-white font-bold tracking-widest uppercase text-base mt-6 bg-slate-100 bg-opacity-20 hover:bg-khaki w-full"
              >
                Reset Password
              </button>
            </form>
  
            <p className="text-sm font-bold text-center sm:px-6 text-slate-200">
              Back to sign in ?
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="underline text-slate-100 hover:text-khaki"
              >
                {" "}
                Sign in
              </Link>
            </p>
          </div>
          {/* <img src='' alt="" /> */}
  
          {/* form */}
        </div>
      </div>
    );
};

export default ResetPass;