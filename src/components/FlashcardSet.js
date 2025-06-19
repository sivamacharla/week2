// import React, { useState } from "react";
// import "./FlashcardSet.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const flashcards = [
//   {
//     question: "What is the capital of France?",
//     answer: "Paris",
//     category: "easy",
//     image: "/images/paris.jpg",
//   },
//   {
//     question: "What is 9 x 12?",
//     answer: "108",
//     category: "medium",
//     image: null,
//   },
//   {
//     question: "What is the derivative of x²?",
//     answer: "2x",
//     category: "hard",
//     image: null,
//   },
//   {
//     question: "Is tomato a fruit?",
//     answer: "Yes",
//     category: "easy",
//     image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
//   },
//   {
//     question: "Who wrote '1984'?",
//     answer: "George Orwell",
//     category: "medium",
//     image: null,
//   },
// ];

// const categoryColors = {
//   easy: "#d4edda",
//   medium: "#fff3cd",
//   hard: "#f8d7da",
// };

// function FlashcardSet() {
//   const [index, setIndex] = useState(0);
//   const [showAnswer, setShowAnswer] = useState(false);

//   const nextCard = () => {
//     setShowAnswer(false);
//     setIndex((prev) => (prev + 1) % flashcards.length);
//   };

//   const prevCard = () => {
//     setShowAnswer(false);
//     setIndex((prev) =>
//       prev === 0 ? flashcards.length - 1 : prev - 1
//     );
//   };

//   const currentCard = flashcards[index];

//   return (
//     <div className="flashcard-set">
//       <h1>The Ultimate Flashcard Set!</h1>
//       <p>Test your knowledge and flip the card to see the answer.</p>
//       <p className="card-count">Card {index + 1} of {flashcards.length}</p>

//       <div
//         className="flashcard"
//         style={{ backgroundColor: categoryColors[currentCard.category] }}
//         onClick={() => setShowAnswer(!showAnswer)}
//       >
//         {currentCard.image && (
//           <img src={currentCard.image} alt="flashcard" className="card-img" />
//         )}
//         <h2>{showAnswer ? currentCard.answer : currentCard.question}</h2>
//       </div>

//       <div className="nav-buttons">
//         <button onClick={prevCard}>
//           <ChevronLeft size={24} /> Prev
//         </button>
//         <button onClick={nextCard}>
//           Next <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default FlashcardSet;

import React, { useState } from "react";
import "./FlashcardSet.css";
import { ChevronLeft, Shuffle } from "lucide-react";

const flashcards = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    category: "easy",
    subject: "Geography",
    image: "/images/paris.jpg",
  },
  {
    question: "What is 9 x 12?",
    answer: "108",
    category: "medium",
    subject: "Math",
    image: null,
  },
  {
    question: "What is the derivative of x²?",
    answer: "2x",
    category: "hard",
    subject: "Math",
    image: null,
  },
  {
    question: "Is tomato a fruit?",
    answer: "Yes",
    category: "easy",
    subject: "Biology",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
  },
  {
    question: "Who wrote '1984'?",
    answer: "George Orwell",
    category: "medium",
    subject: "Literature",
    image: null,
  },
];

const categoryColors = {
  easy: "#d4edda",     // light green
  medium: "#fff3cd",   // light yellow
  hard: "#f8d7da",     // light red
};

function FlashcardSet() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentCard = flashcards[index];

  const nextRandomCard = () => {
    setShowAnswer(false);
    let newIndex = index;
    while (newIndex === index && flashcards.length > 1) {
      newIndex = Math.floor(Math.random() * flashcards.length);
    }
    setIndex(newIndex);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setIndex((prev) =>
      prev === 0 ? flashcards.length - 1 : prev - 1
    );
  };

  return (
    <div className="flashcard-set">
      <h1>The Ultimate Flashcard Set!</h1>
      <p>Test your knowledge and flip the card to see the answer.</p>

      <p className="card-count">
        Subject: <strong>{currentCard.subject}</strong> | Difficulty: <strong>{currentCard.category}</strong><br />
        Card {index + 1} of {flashcards.length}
      </p>

      <div
        className="flashcard"
        style={{ backgroundColor: categoryColors[currentCard.category] }}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {currentCard.image && (
          <img src={currentCard.image} alt="flashcard" className="card-img" />
        )}
        <h2>
          {showAnswer
            ? currentCard.answer
            : currentCard.question || "(Image Only)"}
        </h2>
      </div>

      <div className="nav-buttons">
        <button onClick={prevCard}>
          <ChevronLeft size={24} /> Prev
        </button>
        <button onClick={nextRandomCard}>
          Random <Shuffle size={24} />
        </button>
      </div>
    </div>
  );
}

export default FlashcardSet;

