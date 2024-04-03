import clsx from 'clsx';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function ContactMeButton() {
  const emailAddress = 'chetanpatilaappss@gmail.com';
  
  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <button 
      onClick={handleClick}
      className={clsx(
        "group ml-3 relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105",
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative text-black flex items-center justify-center gap-2">
       Contact{<MdArrowOutward className="inline-block" />}
      </span>
    </button>
    
  );
}

export default ContactMeButton;
