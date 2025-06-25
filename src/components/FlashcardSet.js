import React, { useState } from "react";
import "./FlashcardSet.css";
import { ChevronLeft, ChevronRight, Shuffle } from "lucide-react";

const initialFlashcards = [
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
  easy: "#d4edda",
  medium: "#fff3cd",
  hard: "#f8d7da",
};

function FlashcardSet() {
  const [cards, setCards] = useState(initialFlashcards);
  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const currentCard = cards[index];

  const normalize = (str) =>
    str.toLowerCase().replace(/[^\w\s]|_/g, "").trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (normalize(guess) === normalize(currentCard.answer)) {
      setShowAnswer(true);
      setFeedback("✅ Correct!");
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
    } else {
      setFeedback("❌ Try again!");
    }
  };

  const nextCard = () => {
    if (index < cards.length - 1) {
      setIndex(index + 1);
      resetState();
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      resetState();
    }
  };

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => 0.5 - Math.random());
    setCards(shuffled);
    setIndex(0);
    resetState();
  };

  const resetState = () => {
    setGuess("");
    setFeedback("");
    setShowAnswer(false);
  };

  const markAsMastered = () => {
    const newCards = cards.filter((_, i) => i !== index);
    setMasteredCards([...masteredCards, currentCard]);
    setCards(newCards);
    if (index >= newCards.length) {
      setIndex(newCards.length - 1);
    }
    resetState();
  };

  if (cards.length === 0) {
    return (
      <div className="flashcard-set">
        <h1>All Cards Mastered 🎉</h1>
        <p>Well done! You've mastered all flashcards.</p>
      </div>
    );
  }

  return (
    <div className="flashcard-set">
      <h1>The Ultimate Flashcard Set!</h1>
      <p>Test your knowledge. Type your answer before flipping the card!</p>

      <p className="card-count">
        Subject: <strong>{currentCard.subject}</strong> | Difficulty:{" "}
        <strong>{currentCard.category}</strong>
        <br />
        Card {index + 1} of {cards.length}
      </p>

      <div
        className="flashcard"
        style={{ backgroundColor: categoryColors[currentCard.category] }}
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

      {!showAnswer && (
        <form onSubmit={handleSubmit} className="guess-form">
          <input
            type="text"
            placeholder="Your guess..."
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {feedback && <p className="feedback">{feedback}</p>}

      <div className="nav-buttons">
        <button onClick={prevCard} disabled={index === 0}>
          <ChevronLeft size={20} /> Prev
        </button>
        <button onClick={shuffleCards}>
          <Shuffle size={20} /> Shuffle
        </button>
        <button onClick={nextCard} disabled={index === cards.length - 1}>
          Next <ChevronRight size={20} />
        </button>
      </div>

      <div className="streak-info">
        <p> Current Streak: {streak}</p>
        <p> Longest Streak: {maxStreak}</p>
      </div>
    </div>
  );
}

export default FlashcardSet;



