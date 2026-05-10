'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F2EEE8] flex flex-col items-center justify-center font-sans">
      {/* Face */}
      <div className="relative w-[300px] h-[300px] border-4 border-[#383A41] bg-white rounded-2xl mx-auto mt-[200px] md:scale-100 scale-80">
        {/* Band */}
        <div className="absolute -left-[25px] top-[50px] w-[350px] h-[27px] border-4 border-[#383A41] rounded-md">
          <div className="h-[9px] bg-[#EB6D6D]"></div>
          <div className="h-[9px] bg-white"></div>
          <div className="h-[9px] bg-[#5E7FDC]"></div>
        </div>

        {/* Eyes - 左邊樣式：更簡單的圓形 */}
        <div className="w-[128px] mx-auto mt-[40px] flex justify-center gap-4">
          <div className="w-[25px] h-[25px] border-4 border-[#383A41] rounded-full bg-white flex items-center justify-center">
            <div className="w-[8px] h-[8px] bg-[#383A41] rounded-full"></div>
          </div>
          <div className="w-[25px] h-[25px] border-4 border-[#383A41] rounded-full bg-white flex items-center justify-center">
            <div className="w-[8px] h-[8px] bg-[#383A41] rounded-full"></div>
          </div>
        </div>

        {/* Dimples */}
        <div className="w-[180px] mx-auto mt-[15px] flex justify-between px-12">
          <div className="w-[10px] h-[10px] rounded-full bg-red-400/40"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-red-400/40"></div>
        </div>

        {/* Mouth - 左邊樣式：簡單橫線 */}
        <div className="w-[40px] h-[5px] bg-[#383A41] rounded-md mx-auto mt-[25px]"></div>
      </div>

      {/* Error Message */}
      <h1 className="font-extrabold text-[#383A41] text-center text-[2.5em] md:text-[2.5em] text-[2em] pt-5 px-5">
        Oops! Something went wrong!
      </h1>

      {/* Return Button */}
      <Link 
        href="/"
        className="font-normal px-5 bg-[#5E7FDC] text-white w-[320px] md:w-[320px] w-[200px] mx-auto text-center text-[1.2em] md:text-[1.2em] text-[1.2em] rounded-md cursor-pointer mt-[80px] md:mt-[80px] mt-[60px] mb-[50px] transition-all duration-200 hover:bg-[#5E7FDC]/80 block"
      >
        Return to Home
      </Link>
    </div>
  );
}
