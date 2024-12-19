// 'use client'
// import { useRef } from "react";
// // import React,useRef from "react";
// import { addStyles, EditableMathField } from "react-mathquill";

// // Add MathQuill Styles globally
// addStyles();

// const MathQuillEditor = React.memo(({ value, onChange }) => {
//   // const mathFieldRef = useRef(null);

//   // useEffect(() => {
//   //   if (mathFieldRef.current) {
//   //     mathFieldRef.current.latex(value || ""); // Initialize with the provided value
//   //   }
//   // }, [value]);

//   return (
//     <div className="border border-gray-300 rounded-lg bg-white p-3 shadow-sm">
//       <EditableMathField
//         latex={value} // LaTeX code entered by the user
//         onChange={(mathField) => onChange(mathField.latex())} // Update on input change
//         mathquillDidMount={(mathField) => {
//           // mathFieldRef.current = mathField;
//         }}
//         style={{ fontSize: "16px" }}
//         className="outline-none w-full text-gray-800"
//       />
//     </div>
//   );
// });

export default MathQuillEditor;


// import React, { useRef, useEffect } from "react";
// import { addStyles, EditableMathField } from "react-mathquill";

// // Add MathQuill Styles globally
// addStyles();

// const MathQuillEditor = ({ value, onChange }) => {
//   const mathFieldRef = useRef(null);

//   useEffect(() => {
//     if (mathFieldRef.current) {
//       mathFieldRef.current.latex(value || ""); // Initialize with the provided value
//     }
//   }, [value]);

//   return (
//     <div className="border border-gray-300 rounded-lg bg-white p-3 shadow-sm">
//       <EditableMathField
//         latex={value} // LaTeX code entered by the user
//         onChange={(mathField) => onChange(mathField.latex())} // Update on input change
//         mathquillDidMount={(mathField) => {
//           mathFieldRef.current = mathField;
//         }}
//         style={{ fontSize: "16px" }}
//         className="outline-none w-full text-gray-800"
//       />
//     </div>
//   );
// };

// export default MathQuillEditor;

// import React, { useRef, useEffect } from "react";
// import { addStyles, EditableMathField } from "react-mathquill";

// // Add MathQuill Styles globally
// addStyles();

// const MathQuillEditor = ({ value, onChange }) => {
//   const mathFieldRef = useRef(null);

//   useEffect(() => {
//     if (mathFieldRef.current) {
//       mathFieldRef.current.latex(value || ""); // Initialize with the provided value
//     }
//   }, [value]);

//   return (
//     <div className="border border-gray-300 rounded-lg bg-white p-3 shadow-sm">
//       <EditableMathField
//         latex={value} // LaTeX code entered by the user
//         onChange={(mathField) => onChange(mathField.latex())} // Update on input change
//         mathquillDidMount={(mathField) => {
//           mathFieldRef.current = mathField;
//         }}
//         style={{ fontSize: "16px" }}
//         className="outline-none w-full text-gray-800"
//       />
//     </div>
//   );
// };

// export default MathQuillEditor;

// import React, { useRef } from "react";
// import { addStyles, EditableMathField } from "react-mathquill";

// // Load MathQuill styles
// addStyles();

// const MathQuillEditor = ({ value, onChange }) => {
// const mathFieldRef = useRef(null);

//   // useEffect(() => {
//   //   if (mathFieldRef.current) {
//   //     mathFieldRef.current.latex(value || ""); // Initialize with the provided value
//   //   }
//   // }, [value]);

//   return (
//     <div className="border border-gray-300 rounded-lg bg-white p-3 shadow-sm">
//       <EditableMathField
//         latex={value} // Initial LaTeX value
//         onChange={(mathField) => onChange(mathField.latex())} // Update on input
//         mathquillDidMount={(mathField) => {
//           mathFieldRef.current = mathField; // Store reference for later use
//         }}
//         style={{ fontSize: "16px" }}
//         className="outline-none w-full text-gray-800"
//       />
//     </div>
//   );
// };

// export default MathQuillEditor;



// import React, { useRef, useEffect } from "react";
// import { addStyles, EditableMathField } from "react-mathquill";

// // Load MathQuill styles
// addStyles();

// const MathQuillEditor = ({ value, onChange }) => {
//   const mathFieldRef = useRef(null);

//   useEffect(() => {
//     if (mathFieldRef.current) {
//       mathFieldRef.current.latex(value || "");
//     }
//   }, [value]);

//   const insertSymbol = (symbol) => {
//     if (mathFieldRef.current) {
//       mathFieldRef.current.cmd(symbol);
//       mathFieldRef.current.focus();
//     }
//   };

//   return (
//     <div>
//       {/* Toolbar for math symbols */}
//       <div className="flex space-x-2 mb-4">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => insertSymbol("\\frac{}{}")}
//         >
//           Fraction
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => insertSymbol("^")}
//         >
//           Exponent
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => insertSymbol("\\sqrt{}")}
//         >
//           Square Root
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={() => insertSymbol("\\pi")}
//         >
//           Pi (π)
//         </button>
//       </div>

//       {/* MathQuill Editor */}
//       <div className="border border-gray-300 rounded-lg bg-white p-3 shadow-sm">
//         <EditableMathField
//           latex={value}
//           onChange={(mathField) => onChange(mathField.latex())}
//           mathquillDidMount={(mathField) => {
//             mathFieldRef.current = mathField;
//           }}
//           style={{ fontSize: "16px" }}
//           className="outline-none w-full text-gray-800"
//         />
//       </div>
//     </div>
//   );
// };

// export default MathQuillEditor;
