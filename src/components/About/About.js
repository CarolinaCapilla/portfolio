import React from 'react';

import './About.css';

const About = () => {
  return (
    <div className=" mx-auto background">
      <h1 className="text-center text-purple-900 font-bold text-xl mx-auto md:text-2xl uppercase mb-3">
        About me
      </h1>
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dzsytjxjj/image/upload/v1614346921/profile_ljnx1r.jpg"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <h6 className="mb-3 text-2xl md:text-2xl font-extrabold leading-none sm:text-4xl">
            Your new Full-Stack Developer
          </h6>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">
              Graduated from the #1 web development bootcamp in the world, Le
              Wagon.
            </span>{' '}
            Passionate about coding, eager to learn new technologies,
            programming languages and building projects from scratch. I have a
            history of working with Ruby on Rails, Javascript, HTML, CSS/SCSS,
            PostgreSQL, Heroku, APIs. Confident team worker and also very
            capable on my own. Looking to obtain my first job in software
            development, in a challenging and creative environment that
            encourages growth through teamwork, learning and professional
            development.
            <br />
            All that said. Let's declare variables not war.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
