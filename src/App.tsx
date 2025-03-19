import  { useState, useEffect } from 'react';
import { Book, Skull, Map, HelpCircle } from 'lucide-react';
import { storyNodes } from './storyData';
import { GameState } from './types';
import StoryGraph from './components/StoryGraph';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentNodeId: 'start',
    visitedNodes: ['start'],
    riddleAnswer: '',
    showRiddleError: false
  });

  const currentNode = storyNodes[gameState.currentNodeId];

  const handleChoice = (nextNodeId: string) => {
    setGameState(prev => ({
      ...prev,
      currentNodeId: nextNodeId,
      visitedNodes: [...prev.visitedNodes, nextNodeId],
      riddleAnswer: '',
      showRiddleError: false
    }));
    window.scrollTo(0, 0);
  };

  const handleRiddleSubmit = () => {
    if (!currentNode.riddle) return;
    
    if (gameState.riddleAnswer.toLowerCase().trim() === currentNode.riddle.answer.toLowerCase()) {
      handleChoice(currentNode.riddle.successNode);
    } else {
      setGameState(prev => ({
        ...prev,
        showRiddleError: true
      }));
      setTimeout(() => {
        handleChoice(currentNode.riddle.failNode);
      }, 1500);
    }
  };

  const restartGame = () => {
    setGameState({
      currentNodeId: 'start',
      visitedNodes: ['start'],
      riddleAnswer: '',
      showRiddleError: false
    });
    window.scrollTo(0, 0);
  };

  // Handle Enter key for riddle submission
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && currentNode.riddle) {
        handleRiddleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentNode, gameState.riddleAnswer]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 py-8 px-4">
      <header className="max-w-4xl mx-auto flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-purple-400 flex items-center">
          <Book className="mr-2" /> Terror en el MNAC
        </h1>
        <button 
          onClick={restartGame}
          className="px-3 py-1 bg-purple-900 text-gray-200 rounded flex items-center"
        >
          <HelpCircle size={16} className="mr-1" /> Reiniciar
        </button>
      </header>

      <main className="game-container">
        {currentNode.isMonsterEncounter && (
          <div className="flex items-center mb-4 text-red-500">
            <Skull className="mr-2" /> <span className="font-bold">¡ENCUENTRO CON CRIATURA!</span>
          </div>
        )}
        
        <h2 className="title">{currentNode.title}</h2>
        
        {currentNode.image && (
          <img 
            src={currentNode.image} 
            alt={currentNode.title} 
            className="story-image"
          />
        )}
        
        <p className="story-text">{currentNode.text}</p>
        
        {gameState.visitedNodes.length > 1 && (
          <div className="mb-6 mt-8">
            <div className="flex items-center mb-2">
              <Map className="mr-2" /> <h3 className="subtitle">Tu recorrido</h3>
            </div>
            <StoryGraph visitedNodes={gameState.visitedNodes} />
          </div>
        )}
        
        {currentNode.riddle && (
          <div className="my-6 p-4 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-yellow-300">Acertijo:</h3>
            <p className="mb-4 italic">{currentNode.riddle.question}</p>
            
            <div className="flex">
              <input
                type="text"
                placeholder="Tu respuesta..."
                value={gameState.riddleAnswer}
                onChange={(e) => setGameState(prev => ({ ...prev, riddleAnswer: e.target.value }))}
                className={`riddle-input ${gameState.showRiddleError ? 'border-red-500 bg-red-100' : ''}`}
                autoFocus
              />
              <button 
                onClick={handleRiddleSubmit}
                className="submit-btn"
              >
                Responder
              </button>
            </div>
            
            {gameState.showRiddleError && (
              <p className="text-red-500 mt-2">
                ¡Respuesta incorrecta! Las consecuencias se revelarán pronto...
              </p>
            )}
          </div>
        )}
        
        {!currentNode.riddle && currentNode.choices && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-purple-300">¿Qué harás?</h3>
            <div className="flex flex-col space-y-3">
              {currentNode.choices.map((choice, index) => (
                <button
                  key={index}
                  onClick={() => handleChoice(choice.nextNode)}
                  className="choice-btn"
                >
                  {choice.text}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {currentNode.ending && (
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">FIN</h3>
            <p className="mb-6 text-gray-400 italic">Has llegado a uno de los posibles finales de esta historia.</p>
            <button 
              onClick={restartGame}
              className="restart-btn"
            >
              Comenzar una nueva aventura
            </button>
          </div>
        )}
      </main>
      
      <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-500 text-sm">
        <p>Una aventura CYOA de terror y misterio ambientada en el Museu Nacional d'Art de Catalunya.</p>
        <p className="mt-2">Construido con jdoodle.ai y mermaid.js</p>
      </footer>
    </div>
  );
}

export default App;
 