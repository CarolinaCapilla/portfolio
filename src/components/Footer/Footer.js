import React from 'react';

import { GrLinkedin } from 'react-icons/gr';
import { SiGithub } from 'react-icons/si';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font background">
      <div className="px-5 py-8 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            className="w-8 text-purple-900"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
        </div>
        <p className="justify-center text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 Carolina Capilla
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 md:justify-center justify-start">
          <a
            className="ml-3"
            href="https://www.linkedin.com/in/carolina-capilla/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Item"
          >
            <GrLinkedin className="w-12 h-8 text-purple-600 hover:text-purple-900"></GrLinkedin>
          </a>
          <a
            className="ml-3"
            href="https://github.com/CarolinaCapilla/"
            target="_blank"
            rel="noreferrer"
            aria-label="View Item"
          >
            <SiGithub className="w-12 h-8 text-purple-600 hover:text-purple-900"></SiGithub>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
