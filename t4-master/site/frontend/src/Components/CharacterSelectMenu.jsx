import { useEffect, useState } from "react";
import * as PersonAPI from '../api/person';

function CharacterSelectMenu({onSelectCharacter}) {
  const [characters, setCharacters] = useState([]);
  const typesViolences = ["physique", "émotionelle", "symbolique", "verbal", "sexuelle", "sociale"];
    const[violences,setViolences]= useState([]);


  useEffect(() => {
    PersonAPI.get_people().then((data) => setCharacters(data));
    PersonAPI.get_violences().then((data) => setViolences(data));
  }, []);

  return (
    <div id="game-container">
      <h1>Choisissez votre personnage</h1>
      <div id="character-grid">
        {characters.map((character, index) => (
          <div
            key={index}
            className="character-card"
            onClick={() => onSelectCharacter(character)}
            data-key={`${character.lastname}-${character.firstname}`}
          >
            <div className="character-info">
              <h2>{`${character.lastname} ${character.firstname}`}</h2>
              <p>{`Age: ${character.age}`} ans</p>
              <p>{`Taille: ${character.taille}`} cm</p>
              <p>{`Poids: ${character.poids}`} kg</p>
              <p>{`Origine: ${character.origine}`}</p>
              <p>{`Vulnérabilité : ${typesViolences[character.attributs.split(" ").indexOf(Math.max(...character.attributs.split(" ").map((x) => +x)).toString())]}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterSelectMenu;