import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full py-10 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Saddam Hosan. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a competent web developer, full of positivity & enthusiasm.
              Over the years, I have built up a versatile range of skills. I
              have experience in working both alone and as a team on often
              time-sensitive, challenging web development projects. I always
              ensure my skills are kept up to date within this rapidly changing
              industry. I look forward to getting the opportunity to work in a
              challenging, competitive environment, where one's skills are the
              priority
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
