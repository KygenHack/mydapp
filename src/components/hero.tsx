import React from 'react';
import Logo from "../assets/TRC.png"

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content flex flex-col justify-center text-center text-white">
        <div className="container mx-auto p-4">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      </div>
      <center><img
                            src={Logo}
                            alt="TRC"
                            width="200px"
                            className=""
                          /></center>
      <h1 className="text-4xl font-bold tracking-tight text-hero headerColor sm:text-6xl">
          Tokenized Reward Community
        </h1>          
        <p className="text-lg textHeroP max-w-prose mx-auto">Imagine being part of a decentralized social media platform where every post, like, or comment you make earns you real-life reward</p>

          <a href="/nft-membership" className="btn px-8 py-3 text-lg smartbtn hover:bg-red-600 transition duration-300">Get Membership Pass</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
