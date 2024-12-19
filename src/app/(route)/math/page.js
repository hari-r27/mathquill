// "use client";
// import { useState, useRef } from "react";
// import { addStyles, EditableMathField, StaticMathField } from "react-mathquill";

// // Add MathQuill Styles globally
// addStyles();

// export default function Page() {
//   const [inputValue, setInputValue] = useState(""); // Store the LaTeX code
//   const mathFieldRef = useRef(null); // Reference to MathQuill editor

//   // Change the color of the selected part of the LaTeX input
//   const changeColorOfSelection = () => {
//     if (mathFieldRef.current) {
//       const selection = mathFieldRef.current.text(); // Get the selected text
//       if (selection.trim() !== "") {
//         // Wrap the selected text in the LaTeX color command
//         const currentLatex = mathFieldRef.current.latex(); // Get the current LaTeX
//         const coloredSelection = `\\textcolor{red}{${selection}}`;
//         const updatedLatex = currentLatex.replace(selection, coloredSelection); // Replace selection
//         mathFieldRef.current.latex(updatedLatex); // Update MathQuill content
//         setInputValue(updatedLatex); // Update state
//       } else {
//         alert("Please select text to change color.");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">MathEditor with Selection Highlight</h1>

//       {/* MathQuill Editor (EditableMathField) */}
//       <div className="w-full max-w-lg mb-6">
//         <EditableMathField
//           latex={inputValue} // LaTeX code entered by the user
//           onChange={(mathField) => setInputValue(mathField.latex())} // Update state when modified
//           mathquillDidMount={(mathField) => {
//             mathFieldRef.current = mathField; // Attach MathQuill instance
//           }}
//           style={{ fontSize: "16px" }}
//           className="outline-none w-full text-gray-800 p-3 border border-gray-300 rounded-md"
//         />
//       </div>

//       {/* Button to change color of selection */}
//       <div>
//         <button
//           onClick={changeColorOfSelection}
//           className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//         >
//           Change Color to Red
//         </button>
//       </div>

//       {/* Display the current LaTeX value */}
//       <div className="mt-6 w-full max-w-lg">
//         <h2 className="text-lg font-medium text-gray-700">Current LaTeX:</h2>
//         <div className="border p-4 rounded-md bg-white mt-2">
//           <StaticMathField>{inputValue}</StaticMathField> {/* Render LaTeX */}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import React from  "react";
// import { MathJax, MathJaxContext } from "better-react-mathjax";
const MathInput=()=>{
  return(
    <div>
      <input type="text"
      contentEditable
       placeholder="type here..."
       className="w-full max-w-lg mb-6 p-4 border border-gray-300 rounded-md bg-white"
       style={{
        minHeight: "100px",
        fontSize: "16px",
      }}
      />
    </div>
  )
}


export default MathInput;
