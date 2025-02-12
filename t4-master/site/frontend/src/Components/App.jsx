import React from "react";
import CharacterSelectMenu from "./CharacterSelectMenu";
import { useEffect,useState} from "react";
import Interface from "./Interface";
import GameInterface from "./GameInterface"

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const handleSelectCharacter = (character) => {
      setSelectedCharacter(character);
      setGameStarted(true);
    };
  
    {/*<Interface selectedcharacter={selectedCharacter} />*/}
    return (
      <div className="App">
        {gameStarted ? (
            <GameInterface character={selectedCharacter}/>
        ) : (
            <div>
          <CharacterSelectMenu onSelectCharacter={handleSelectCharacter} />
          </div>
        )}
      </div>
    );
  }

export default App;



