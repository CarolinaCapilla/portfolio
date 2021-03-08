import React from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

import './Contact.css';

const Contact = () => {
  return (
    <div className="background">
      <div className="px-4 py-16 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-center -m-6 text-purple-900 font-bold mx-auto text-3xl md:text-3xl uppercase">
          Contact
        </h2>
        <p className="md:text-lg mt-12 text-center text-gray-800">
          Want to work with me? Awesome!
        </p>
        <div className="text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:carolina.capilla@gmail.com"
            aria-label=""
            className="inline-flex items-center md:px-4 md:py-2 px-2 py-1 mb-3 mt-6 text-center font-medium tracking-wide text-white transition-colors duration-200 transform uppercase bg-purple-600 rounded-md dark:bg-gray-800 hover:bg-purple-900"
          >
            Let's talk
          </a>
        </div>
        <div className="text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center md:px-4 md:py-2 px-2 py-1"
          >
            <RiArrowUpSLine className="w-12 h-12 text-gray-900"></RiArrowUpSLine>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
