import React from 'react';
import { FaReact, FaCss3 } from 'react-icons/fa';
import { SiRails, SiJavascript, SiHtml5 } from 'react-icons/si';
import { DiRubyRough } from 'react-icons/di';

import profile from '../../assets/images/profile_2.jpg';
import './Content.css';

const Content = () => {
  return (
    <div id="about" className="background">
      <div className="px-4 py-16 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="text-center text-purple-900 font-bold mx-auto text-3xl md:text-3xl uppercase mb-3 md:p-6">
          About me
        </h2>
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans md:text-xl text-2xl font-bold tracking-tight text-gray-900 sm:leading-none">
                I'm your new
                <span className="relative px-1">
                  <div className="absolute px-1 inset-x-0 bottom-0 h-3 transform -skew-x-12" />
                  <span className="relative md:text-2xl inline-block font-semibold text-purple-900">
                    Full-Stack Developer
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-800 md:text-lg">
                <span className="font-bold">
                  Graduated from the #1 web development bootcamp in the world,
                  Le Wagon.
                </span>{' '}
                Passionate about coding, eager to learn new technologies,
                programming languages and building projects from scratch. I have
                a history of working with Ruby on Rails, Javascript, HTML,
                CSS/SCSS, PostgreSQL, Heroku, APIs. Confident team worker and
                also very capable on my own.
              </p>
            </div>
            <p className="mb-4 font-bold text-xl md:text-xl tracking-widest uppercase text-purple-900">
              My Stack
            </p>
            <div className="grid grid-flow-col">
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <FaReact className="w-5 h-5 mt-px text-blue-300" />
                  </span>
                  React
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <SiRails className="w-5 h-5 mt-px text-red-500" />
                  </span>
                  Ruby on Rails
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <SiJavascript className="w-5 h-5 mt-px text-yellow-300" />
                  </span>
                  Javascript ES6
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-1">
                    <DiRubyRough className="w-5 h-5 mt-px text-red-800" />
                  </span>
                  Ruby
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <SiHtml5 className="w-5 h-5 mt-px text-yellow-600" />
                  </span>
                  HTML5
                </li>
                <li className="flex">
                  <span className="mr-1">
                    <FaCss3 className="w-5 h-5 mt-px text-blue-700" />
                  </span>
                  CSS3
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full  rounded shadow-lg sm:h-96"
              src={profile}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.canva.com/design/DAEFz3OOSq8/4wseicbCHn2-VJLCk7D-VA/view?utm_content=DAEFz3OOSq8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            aria-label=""
            className="inline-flex items-center mt-10 font-semibold transition-colors duration-200 text-purple-600 hover:text-purple-900"
          >
            View Resume
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
