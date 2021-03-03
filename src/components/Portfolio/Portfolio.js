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
        {/* <a
          href="https://your-burger-builder.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="View Item"
        > */}
        <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img
            className="object-cover w-full h-56 md:h-64 xl:h-80"
            src={burger}
            alt=""
          />
          <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
            <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
            <p className="text-sm tracking-wide text-gray-300">
              Painted between 1503 and 1517, Da Vinci’s alluring portrait has
              been dogged by two questions since the day it was made: Who’s the
              subject and why is she smiling?
            </p>
          </div>
        </div>
        {/* </a> */}
        <a
          href="https://art-deco-finder.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="View Item"
        >
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={decor}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                The Starry Night
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Vincent Van Gogh’s most popular painting, The Starry Night was
                created by Van Gogh at the asylum in Saint-Rémy, where he’d
                committed himself in 1889.
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://themenu-mudita.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="View Item"
        >
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={themenu}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
              <p className="text-sm tracking-wide text-gray-300">
                Opulently gilded and extravagantly patterned, The Kiss, Gustav
                Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                Symbolism and Vienna Jugendstil, the Austrian variant of Art
                Nouveau.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;