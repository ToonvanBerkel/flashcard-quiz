import FlashCard from './FlashCard';
import { flashcards } from '../data';

function FlashCardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {flashcards.map((card, index) => (
        <FlashCard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
}

export default FlashCardList;