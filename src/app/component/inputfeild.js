'use client';

import React, { useState } from 'react';

const InputFeild = ({ label, id, name, value, onChange, onBlur }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    setIsFocused(false); 
    if (onBlur) onBlur(event); 
    
  };

  return (
    <div className="relative my-4">
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`peer block w-full px-3 pt-1 text-base text-black bg-transparent  border  border-gray-500 focus:outline-none focus:border-0 focus:border-2 focus:pt-5   focus:border-b-8  focus:border-green-300 placeholder-transparent ${
          (isFocused || value) ? 'border-gray-300 pt-5 focus:outline-none focus:border-0 focus:border-2 focus:pt-5   focus:border-b-8  focus:border-green-300 placeholder-transparent ' : 'border-gray-400  '
        }`}
        placeholder=" " 
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 transform origin-left ${
          (isFocused || value) 
            ? 'top-0 text-sm text-green-900 z-40' 
            : 'top-1/2 text-base text-gray-500 -translate-y-1/2'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputFeild;
