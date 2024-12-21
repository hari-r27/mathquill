"use client";

import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import katex from "katex"; 
import "katex/dist/katex.min.css"; 

const Popup = dynamic(() => import("@/app/component/MathQuillEditor"), {
  ssr: false,
});//!--Dynamically importing the component---------------------------------------------------------

//!here i using two state and one ref-------------------->
const Home = () => {
  const [content, setContent] = useState("");
  const [isMathEditorOpen, setMathEditorOpen] = useState(false);
  const [Open, EditorOpen] = useState(false);
  const [Final, FinalOutput] = useState([]);
  const contentRef = useRef(null);

  const handleInsertEquation = (equation) => {
    const renderedEquation = katex.renderToString(equation, {
      throwOnError: false,
    });

    // !--here i creating the span tag to store only the mathexpression---------
    const span = document.createElement("span"); //! here i creating one span tag manually
    span.className = "mq-selectable";//! setting the class name 
    span.setAttribute("data-latex", equation);//! setting the attribute
    span.setAttribute("contenteditable", "false");
    span.innerHTML = renderedEquation;

    //! here i appending the expression----------
    if (contentRef.current) {
      //!here the selection will insert the expression (if we inserted means the range value getincreasing by 1
        //!and storing teh range...
      const selection = window.getSelection();
      console.log(selection,"selection")
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);

        // Insert the span at the current cursor position
        range.deleteContents();
        range.insertNode(span);

        // Create a space after the equation so the cursor moves outside
        const space = document.createTextNode(" ");
        range.insertNode(space);

        // Move the cursor after the newly inserted span
        range.setStartAfter(space);
        range.setEndAfter(space);
        selection.removeAllRanges();
        selection.addRange(range);

        // Update the content state
        setContent(contentRef.current.innerHTML);
      } else {
        // No selection, handle if needed (e.g., insert at the end of the content)
        const div = contentRef.current;
        div.appendChild(span);
        div.appendChild(document.createTextNode(" ")); // Optional: Add space after equation
      }

      setMathEditorOpen(false);
    }
  };
 
  // Handle form submission
  const handleSubmit = () => {
    // Extract original LaTeX from spans
    const div = document.createElement("div");
    div.innerHTML = content;
    const equations = div.querySelectorAll(".mq-selectable");
    equations.forEach((span) => {
      const latex = span.getAttribute("data-latex");
      span.innerHTML = latex; // Replace with original LaTeX
      console.log(span.innerHTML)
    });
    let gettingresult=div.innerHTML
    EditorOpen(gettingresult)
    console.log(div.innerHTML);
    const handleAddQuestion = () => {
      if (!content.trim()) {
        alert('Nothing In Input.');
        return;
      }
  
      FinalOutput((prev) => [...prev, content]);
      setContent('');
      if (contentRef.current) {
        contentRef.current.innerHTML = '';
      }
    }; 
    handleAddQuestion();// This is the submitted content
  };

  // Track changes in the contentEditable field
  const handleContentChange = () => {
    if (contentRef.current) {
      setContent(contentRef.current.innerHTML);
      // console.log(contentRef)

    }
    
  };

  // Automatically update the content in the div when the content state changes
  useEffect(() => {
    if (contentRef.current && content !== contentRef.current.innerHTML) {
      contentRef.current.innerHTML = content;
    }
  }, [content]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="p-6 bg-gray-800 rounded shadow-md border border-white w-full max-w-[600px] sm:w-[500px] md:w-[400px] lg:w-[400px] xl:w-[400px] mt-10">
        <div className="flex flex-col gap-4 mb-4">
          <button
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            onClick={() => setMathEditorOpen(true)}
          >
            Math Editor
          </button>

          <div
            ref={contentRef}
            className="border border-gray-300 p-4 bg-white rounded text-black w-full mb-4"
            contentEditable
            onInput={handleContentChange}
            style={{
              minHeight: "80px",
              fontSize: "16px",
              lineHeight: "1.5",
              cursor: "text",
            }}
          />
 
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Submit
          </button>
        
        </div>
        <div className="mt-4">
        {Final.map((Final, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 bg-white rounded mb-2 text-black"
          >
            <div dangerouslySetInnerHTML={{ __html: Final }} />
          </div>
        ))}
      </div>

      {/* //! here i am using conditional opre and checking whether the box is true or not if true it execute---------- */}
        {isMathEditorOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div>
              <Popup
                onInsertEquation={handleInsertEquation}
                onClose={() => setMathEditorOpen(false)}
              />
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Home;


