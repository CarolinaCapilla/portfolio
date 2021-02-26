import React from 'react';
import blob from '../../assets/images/mixed_blobs.gif';
import './Banner.css';

const Banner = () => {
  return (
    <div className="relative background mx-auto">
      <img className="banner-img" src={blob} alt="banner" />
      <div className="banner-text md:mt-10 absolute">
        <h1 className="text-center text-purple-900 mx-auto text-2xl sm:max-w-xl md:text-7xl lg:max-w-screen-xl">
          Hello, I'm Carolina.
        </h1>
        <p className="text-center text-purple-700 font-thin md:text-xl">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Banner;
