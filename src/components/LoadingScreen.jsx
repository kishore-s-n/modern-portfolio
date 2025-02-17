import { useEffect, useState } from "react";
import { loadingScreenString } from "../constants/constant";
// eslint-disable-next-line react/prop-types
export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fultxt = loadingScreenString;

  useEffect(() => {
    let ind = 0;
    const interval = setInterval(() => {
      setText(fultxt.substring(0, ind++));
      if (ind > fultxt.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);
  return (
    <div className='fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center'>
      <div className='mb-4 md:text-4xl text-2xl font-mono font-bold'>
        {text}
        <span className='animate-blink ml-1'>|</span>
      </div>
      <div className='w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden'>
        <div className='w-[40%] h-full bg-blue-800 shadow-[0_0_15px_#3b82f6] animate-loading-bar'></div>
      </div>
    </div>
  );
};
