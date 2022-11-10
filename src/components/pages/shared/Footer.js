import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import brand from "../../../asset/brand/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="px-4 pt-16 mt-10 bg-black  sm:max-w-xl md:max-w-full  md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
              <Link to="/">
                <img className="w-1/2" src={brand} alt="" />
              </Link>
        
           
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-slate-200">Phone:</p>
              <a
                href="tel:01819051432"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-slate-200 hover:text-deep-purple-800"
              >
                01819051432
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-slate-200">Email:</p>
              <a
                href="mailto:shipatulhasan328@gmail.com"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-slate-200 hover:text-deep-purple-800"
              >
                shipatulhasan328@gmail.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-slate-200">Address:</p>
              <p
                
                className="transition-colors duration-300 text-slate-200 hover:text-deep-purple-800"
              >
                312 Omeca Street, NY
              </p>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-white">
              Social
            </span>
            <div className="flex items-center mt-2 space-x-3 text-khaki">
              <FaTwitter />
              <FaFacebook />
              <FaLinkedin />
            </div>
            <p className="mt-4 text-sm text-slate-200">
              Are you looking for the best family lawyer in the city. Please contact us. 
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-slate-700 lg:flex-row">
          <p className="text-sm text-slate-200">
            © Copyright 2022 Family Law Attorney. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                to="/faq"
                className="text-sm text-slate-200 transition-colors duration-300 hover:text-slate-200"
              >
                F.A.Q
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-sm text-slate-200 transition-colors duration-300 hover:text-slate-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-sm text-slate-200 transition-colors duration-300 hover:text-slate-200"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Footer;