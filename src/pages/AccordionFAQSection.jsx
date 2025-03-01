import React, { useState } from "react";

const data = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },

  {
    question: "What is useState?",
    answer:
      "useState is a React Hook that allows functional components to manage state.",
  },

  {
    question: "What is the Virtual DOM, and how does it work in React?",
    answer: "The Virtual DOM (VDOM) is a lightweight copy of the actual DOM.",
  },

  {
    question: "What is React.memo, and how does it help with performance?",
    answer:
      "React.memo is a higher-order component that prevents unnecessary re-renders.",
  },
];

const AccordionFAQSection = () => {
  const [displayAnswer, setDisplayAnswer] = useState(null);

  function displayAnswers(index) {
    const result = displayAnswer === index ? null : index;
    setDisplayAnswer(result);
  }

  return (
    <div>
      <div>
        <ul>
          {data.map((dataArray, index) => (
            <div key={index}>
              <li
                onClick={() => displayAnswers(index)}
                className="w-full bg-[#258349] py-2"
              >
                {dataArray.question}
              </li>

              <li
                className="w-full bg-[#258349] py-2"
                style={{ display: displayAnswer === index ? "block" : "none" }}
              >
                {dataArray.answer}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AccordionFAQSection;
