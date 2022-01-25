import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // Shuffle cards
  const shuffleCards = () => {
    // Make double cards in one array
    // Shuffle them and give them an ID
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  // Handle a choice
  const handleChoice = card => {
    // if choiceOne is not null set the clicked card on Two, else on One
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  console.log(cards, turns);
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {/** Map through every card */}

        {cards.map(card => (
          // Add card and handleChoice as props to SingleCard
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
