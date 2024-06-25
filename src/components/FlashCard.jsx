import { useState } from 'react';

function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flashcard"
      onClick={() => setIsFlipped(!isFlipped)}
      className="border p-4 rounded-lg shadow-md hover:bg-blue-200 cursor-pointer"
    >
      {isFlipped ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
}

export default FlashCard;