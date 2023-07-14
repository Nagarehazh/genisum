import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-10 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Nagarehazh/genisum", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Discover the power of Artificial Intelligence to condense articles and simplify <br className='max-md:hidden' />
        <span className='green_gradient '>your reading experience.</span>
      </h1>
      <h2 className='desc'>
        Introducing Genisum, an open-source article summarizer that efficiently transforms lengthy articles into concise and clear summaries.
      </h2>
    </header>
  );
};

export default Hero;
