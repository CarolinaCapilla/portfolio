import React from 'react';

import burger from '../../assets/images/burgerbuilder_2.jpg';
import decor from '../../assets/images/decor_3.jpg';
import themenu from '../../assets/images/themenu.jpg';

const Portfolio = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 text-center font-bold mx-auto text-3xl md:text-3xl uppercase tracking-tight text-purple-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">Projects</span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <p className="text-lg font-bold text-center text-purple-900">
            Burger Builder
          </p>
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={burger}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="tracking-wide text-sm text-gray-300 mb-7 md:mb-20">
              Build a yummy burger with different ingredients to then get it
              delivered right to your door. <br />
              Built with React.js, JSES6, CSS3 and Firebase. Hosted in Heroku
            </p>
            <div className="grid">
              <a
                href="https://your-burger-builder.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Item"
                className="md:px-4 md:py-2 px-2 py-1 mb-3 text-center font-medium tracking-wide text-white transition-colors duration-200 transform uppercase bg-purple-600 rounded-md dark:bg-gray-800 hover:bg-purple-900 dark:hover:bg-gray-700"
              >
                See live
              </a>
              <a
                href="https://github.com/CarolinaCapilla/burger-builder"
                target="_blank"
                rel="noreferrer"
                aria-label="View Item"
                className="md:px-4 md:py-2 px-2 py-1 mb-3 text-center font-medium tracking-wide text-white transition-colors duration-200 transform uppercase bg-purple-400 rounded-md dark:bg-gray-800 hover:bg-purple-900 dark:hover:bg-gray-700"
              >
                Source code
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <p className="text-lg font-bold text-center text-purple-900">Decor</p>
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={decor}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="tracking-wide text-sm text-gray-300 mb-2 md:mb-20">
              Stylish artistic rentals solution for art owners, connecting them
              with customers that wish to rent a piece of art to enrich their
              environment. <br />
              Built with Ruby on Rails, HTML, CSS, JavaScript, Active Record and
              hosted in Heroku.
            </p>
            <div className="grid">
              <a
                href="https://art-deco-finder.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Item"
                className="md:px-4 md:py-2 px-2 py-1 mb-3 text-center font-medium tracking-wide text-white transition-colors duration-200 transform uppercase bg-purple-600 rounded-md dark:bg-gray-800 hover:bg-purple-900 dark:hover:bg-gray-700"
              >
                See live
              </a>
              <a
                href="https://github.com/CarolinaCapilla/al-decor"
                target="_blank"
                rel="noreferrer"
                aria-label="View Item"
                className="md:px-4 md:py-2 px-2 py-1 mb-3 text-center font-medium tracking-wide text-white transition-colors duration-200 transform uppercase bg-purple-400 rounded-md dark:bg-gray-800 hover:bg-purple-900 dark:hover:bg-gray-700"
              >
                Source code
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <p className="text-lg font-bold text-center text-purple-900">
            The Menu
          </p>
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={themenu}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="tracking-wide text-sm text-gray-300 mb-4 md:mb-20">
              Empowering chefs and bartenders to be their own bosses providing
              them with a platform to showcase their skills.
              <br />
              Built with Ruby on Rails, HTML, CSS, AOS. JavaScript, Active
              Record and hosted on Heroku.
            </p>
            <div className="grid">
              <a
                href="https://themenu-mudita.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Item"
                className="md:px-4 md:py-2 px-2 py-1 mb-3 text-center font-medium tracking-wide text-white transition-colors duration-200 transform uppercase bg-purple-600 rounded-md dark:bg-gray-800 hover:bg-purple-900 dark:hover:bg-gray-700"
              >
                See live
              </a>
              <a
                href="https://github.com/CarolinaCapilla/the_menu"
                target="_blank"
                rel="noreferrer"
                aria-label="View Item"
                className="md:px-4 md:py-2 px-2 py-1 mb-3 text-center font-medium tracking-wide text-white transition-colors duration-200 transform uppercase bg-purple-400 rounded-md dark:bg-gray-800 hover:bg-purple-900 dark:hover:bg-gray-700"
              >
                Source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
