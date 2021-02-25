import React from 'react';
import blob from '../../assets/images/mixed_blobs.gif';
import '../Banner/Banner.css';

const Banner = () => {
  return (
    <div className="home relative items-center">
      <img className="banner-img " src={blob} alt="banner" />
      <div className="banner-text flex flex-col absolute">
        <h1 className="text-center text-purple-900 font-bold text-7xl">
          Hello, I'm Carolina.
        </h1>
        <p className="text-center text-purple-700 font-thin text-xl">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Banner;
