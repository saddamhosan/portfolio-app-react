import React from 'react';
import About from './About';

const Home = () => {
  return (
    <div name="home" className="w-full h-[80vh] bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, This is</p>
        <h1 className="text-2xl sm:text-4xl font-bold text-[#ccd6f6]">
          Saddam Hosan
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8892b0]">
          I'm a MERN Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a self-motivated web developer and also know back-end web
          applications. I am determined to do hard work sincerely and honestly
          until I reach the goal. I always wanted to work as a web developer
          with a good team and take the challenge to meet the goal.
        </p>
        <div>
          <a
            className="text-white border-2 px-6 py-3 my-2  hover:bg-pink-600 hover:border-pink-600"
            href="https://drive.google.com/file/d/1v3BqjpyoVzh0f9WVX_-JeMn4yzXTVIMR/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
