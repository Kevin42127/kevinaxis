'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center font-sans">
      {/* Error Message */}
      <h1 className="font-extrabold text-white text-center text-[2.5em] md:text-[2.5em] text-[2em] px-5">
        Oops! Something went wrong!
      </h1>

      {/* Return Button */}
      <Link 
        href="/"
        className="font-normal px-8 py-4 bg-white text-black w-[280px] md:w-[280px] w-[240px] mx-auto text-center text-[1.1em] md:text-[1.1em] text-[1.1em] rounded-lg cursor-pointer mt-[80px] md:mt-[80px] mt-[60px] mb-[50px] transition-all duration-200 hover:bg-gray-200 block font-medium"
      >
        Return to Home
      </Link>

      {/* Custom text selection style - same as homepage */}
      <style jsx global>{`
        /* Custom text selection style - white background, black text */
        ::selection {
          background-color: #ffffff;
          color: #000000;
        }

        ::-moz-selection {
          background-color: #ffffff;
          color: #000000;
        }
      `}</style>
    </div>
  );
}
