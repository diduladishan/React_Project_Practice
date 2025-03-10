import React, { useState } from "react";
const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
];

const DigitalClock = () => {
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());

  function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNumber];

    return randomQuote;
  }

  function generateQuote() {
    setCurrentQuote(getRandomQuote());
  }

  return (
    <>
      <div>{currentQuote.text}</div>
      <div>{currentQuote.author}</div>
      <button onClick={generateQuote} className="bg-green-500 px-3 py-1">
        Generate
      </button>
    </>
  );
};

export default DigitalClock;
