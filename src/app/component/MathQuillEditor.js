
'use client';

import React, { useState } from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';

addStyles();

const Popup = ({ onInsertEquation, onClose }) => {
  const [mathValue, setMathValue] = useState('');

//! I adding the predefinedequation and symbols----------------------------------------------------------------
  const predefinedEquations = [
    { latex: '\\frac{}{}', name: 'Fraction' },  
    { latex: '\\sqrt{}', name: 'Root' },     
    { latex: '\\int_{}^{}', name: 'Integral' },   
    { latex: '\\sum_{}', name: 'Summation' },
  ];

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 p-3 rounded-lg shadow-lg w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[450px] z-50">
      <h2 className="text-xl font-semibold mb-3 text-white">Math Editor</h2>

{/* //!----HERE IM USING (EditableMathField)----------------------------------------------------------------------      */}
      
      <div className=" border-b text-white  border-gray-100  p-2 mb-3">
        <EditableMathField
          latex={mathValue}
          onChange={(mathField) => setMathValue(mathField.latex())}
        />
      </div>
{/* //!--------------Here iam adding button based on the symbols and i making this iterate by using MAP mathod-------- */}
      <div className="flex text-white flex-wrap gap-2 mb-3">
        {predefinedEquations.map((eq, index) => (
          <button
            key={index}
            // ! in this place updating mathvalue and adding expression here
         onClick={() => setMathValue(eq.latex)}    
            className="px-3 py-1 bg-blue-600 text-white border border-blue-700 rounded hover:bg-blue-700 transition"
          >
            {eq.name}
          </button>
        ))}
      </div>
{/* //!Here iam using two button submit and close ----------------------------------------------------- */}
      <div className="flex justify-around gap-2">
        <button
          onClick={() => onInsertEquation(mathValue)} //!`getting props and updating the value------------
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Submit
        </button>
        <button
          onClick={onClose} //!-when i click it going to page component and excution start--------------
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
