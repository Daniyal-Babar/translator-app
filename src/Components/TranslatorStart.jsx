import React from 'react';

const TranslatorStart = ({ onStart }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center p-6 sm:p-12">
      {/* Visual Header / Language Graphic */}
      <div className="w-full max-w-md h-64 bg-gradient-to-l from-[#b6f492] to-[#338b93] rounded-t-full rounded-bl-full flex flex-col justify-center text-gray-700 pr-6 gap-1 shadow-lg">
        <span className="font-shojumaru text-5xl sm:text-6xl text-center">Hello</span>
        <span className="text-2xl sm:text-3xl text-center">გამარჯობა</span>
        <span className="font-noto-sans-jp text-3xl sm:text-4xl text-right">こんにちは</span>
        <span className="text-2xl sm:text-3xl text-right">Hola</span>
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-md text-right space-y-5 mt-10 sm:mt-16">
        <h1 className="font-righteous text-4xl sm:text-5xl text-white uppercase tracking-wider">
          Translator App
        </h1>
        <button
          type="button"
          className="w-32 h-10 bg-gradient-to-r from-[#b6f492] to-[#338b93] rounded-full font-righteous text-lg uppercase text-gray-800 tracking-widest transition-transform hover:scale-105 active:translate-y-[1px]"
          onClick={onStart}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default TranslatorStart;