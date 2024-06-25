import FlashCardList from './components/FlashCardList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="text-center text-2xl font-bold p-4 bg-blue-500 text-white">
        Capital Cities Flashcard Quiz
      </header>
      <main className="p-4">
        <FlashCardList />
      </main>
    </div>
  );
}

export default App;