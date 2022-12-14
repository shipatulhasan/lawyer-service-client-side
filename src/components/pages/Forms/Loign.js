import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import {Helmet} from 'react-helmet-async'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import banner from "../../../asset/banner/inner_background_01.jpg";
import hero from "../../../asset/banner/hero_banner.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from '../shared/Loader'

const Loign = () => {
  const { signInWithGoogle, signIn, isLoading, setLoading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const [error, setError] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();
  
  let from =  location.state?.from?.pathname || "/" 

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    if (email === "" || pass === "") {
      return;
    }

    signIn(email, pass)
      .then((result) => {
        const user = result.user
        toast.success("Successfully logged in");
        form.reset();
        
        setError("");

        const currentUser = {
          email:user.email
        }

        // jwt verification

        fetch('https://lawyer-server-omega.vercel.app/jwt',{
          method:'post',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
          setLoading(false)
          navigate(from, { replace: true })
          localStorage.setItem('my_token',data.token)
        })
 
      })
      .catch((err) => {
        const firebaseError = err.message;
        const errorMsg = firebaseError.split("/")[1].replace(/[-())/]+/g, " ");
        setError(errorMsg);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user =result.user;
        toast.success("Successfully Loggedin");

        const currentUser = {
          email:user.email
        }
        // jwt verification

        fetch('https://lawyer-server-omega.vercel.app/jwt',{
          method:'post',
          headers:{
            'content-type':'application/json',
          },
          body:JSON.stringify(currentUser)
        })
        .then(res=>res.json())
        .then(data=>{
          setLoading(false)
          navigate(from, { replace: true })
          localStorage.setItem('my_token',data.token)
        })
        
      })
      .catch((err) => {
        const firebaseError = err.message;
        const errorMsg = firebaseError.split("/")[1].replace(/[-())/]+/g, " ");
        setError(errorMsg);
      });
  };
  return (
    <div>
       <Helmet>
          <title>Login-Family Law Attorney</title>
          </Helmet>
    <div
      className="relative py-20 flex flex-col justify-center min-h-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {
        isLoading && <div className="fixed flex items-center top-0 left-0 h-full w-full bg-slate-100 bg-opacity-25 z-10"><Loader /></div>
      }
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
          <h1 className="text-4xl font-bold text-center text-khaki uppercase">
            Sign In
          </h1>

          <p className="text-red-600 font-semibold text-xl py-4">{error}</p>

          {/* google signup */}

          <button
            onClick={handleGoogleSignUp}
            className="flex items-center justify-center mt-4 text-white transition-colors duration-300 transform border border-khaki w-full bg-slate-100 bg-opacity-20 hover:bg-khaki tracking-widest"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold uppercase text-center">
              Sign in with Google
            </span>
          </button>
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

            <div className="space-y-1 text-base">
              <div className="relative flex items-center justify-center">
                <input
                  type={isOpen ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-slate-100 bg-opacity-20 focus:outline-none text-slate-100"
                />
                <div
                  className="absolute right-0 mt-1 mr-3 cursor-pointer text-slate-100 text-sm"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <FaRegEye /> : <FaRegEyeSlash />}
                </div>
              </div>
              <div className="flex justify-end text-sm text-slate-100">
                <Link to="/reset-password">Forgot Password?</Link>
              </div>
            </div>

            <button
              type="submit"
              className="border border-khaki py-3 text-white font-bold tracking-widest uppercase text-base mt-6 bg-slate-100 bg-opacity-20 hover:bg-khaki w-full"
            >
              Sign in
            </button>
          </form>

          <p className="text-sm font-bold text-center sm:px-6 text-slate-200">
            Don't have an account ?
            <Link
              rel="noopener noreferrer"
              to="/signup"
              className="underline text-slate-100 hover:text-khaki"
            >
              {" "}
              Sign up
            </Link>
          </p>
        </div>
        {/* <img src='' alt="" /> */}

        {/* form */}
      </div>
    </div>
    </div>
  );
};

export default Loign;
