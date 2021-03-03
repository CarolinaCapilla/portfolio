import React from 'react';
import { FaReact, FaCss3 } from 'react-icons/fa';
import { SiRails, SiJavascript, SiHtml5 } from 'react-icons/si';
import { DiRubyRough } from 'react-icons/di';

import profile from '../../assets/images/profile_2.jpg';
import './Content.css';

const Content = () => {
  return (
    <div className="background">
      <div className="px-4 py-16 mx-auto md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h1 className="text-center text-purple-900 font-bold mx-auto md:text-3xl uppercase mb-3 md:p-6">
          About me
        </h1>
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-center md:text-xl font-bold tracking-tight text-gray-900 sm:leading-none">
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
            <p className="mb-4 text-sm font-bold md:text-xl tracking-widest uppercase text-purple-900">
              My Stack
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
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
                  Javascript
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
      </div>
    </div>
  );
};

export default Content;
