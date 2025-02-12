import React, { useState,useEffect } from "react";
import Header from "./Header";
import Button from "./Button";
import {CardSituation} from "./Card";
import {CardAction} from "./Card";
import {get_situations,get_actions} from "../api/person.js";
import { LinearProgress } from "@mui/joy";

function GameInterface({ character}) {
    const [tolerance, setTolerance] = useState(character.tolerance/2 * 100 /character.tolerance);
    const [currentSituation, setCurrentSituation] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    //Tab de tout les éléments respectifs
    const [AllSituations, setAllSituations] = useState([]);
    const [AllActions,setAllActions] = useState([]);
    //Tab des 5 situations tiré au sort et 3 actions
    const [choosenSituations, setChoosenSituations] = useState([]);
    const [selectedActions,setselectedActions] = useState([]);
    const [nbevenement,setevenement] = useState(6);


    useEffect(() => {
        load();
        loadActions();
    }, []);

    useEffect(() => {
        // Faire quelque chose avec les nouvelles valeurs de choosenSituations
    }, [choosenSituations,selectedActions,currentSituation,tolerance]);


    const load=() => {
        get_situations(character.id).then(r => {
            setAllSituations(r);
            defCurrentSituation();
        });
    }

    const loadActions=() => {
        get_actions(1).then(r => {
            console.log("load_action "+r.length)
            setAllActions(r);
        });
    }

    const handleStartGame = () => {
        setIsPlaying(true);

        PickRandomSituation();
        defCurrentSituation();
        PickRandomAction();
      };
    
      const handleStopGame = () => {
        setIsPlaying(false);
        setCurrentSituation(null);
      };

      const defCurrentSituation = () =>
      {
        setCurrentSituation(choosenSituations.shift());
      }
    
      const PickRandomSituation = () => {
        let newChoosenSituations = [];
                
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * AllSituations.length);
            const currentSituation = AllSituations[randomIndex];
            newChoosenSituations = [currentSituation, ...newChoosenSituations];
            AllSituations.splice(randomIndex, 1);
        }

        setChoosenSituations(newChoosenSituations);
    };


    const handleDecision = (situation) => {
        const newTolerance = tolerance - situation.impact;

        if (newTolerance < 0) {
            // Si la barre de tolérance descend en-dessous de 0, le personnage perd la partie
            alert("Votre personnage n'a pas pu supporter cette situation. Vous avez perdu la partie !");
        } else {
            // Sinon, la barre de tolérance est mise à jour avec le nouvel état
            setTolerance(newTolerance);
        }
        // Passe à la situation suivante
        loadActions();
        defCurrentSituation();
        PickRandomAction();
       // handleStartGame();
        setevenement(nbevenement-1);

        console.log("situation suivante :"+situation.label);
    };


    const PickRandomAction = () => {
        let newChoosaction = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * AllActions.length);
            const currentAction= AllActions[randomIndex];
            newChoosaction = [currentAction, ...newChoosaction];
            AllActions.splice(randomIndex, 1);
        }

        setselectedActions(newChoosaction);
    }

    return (
        <section>
            <div id="idJauge">
                <Header character={character} />
                <h2>Jauge de tolérance</h2>
                <div><LinearProgress determinate value={tolerance}/></div>
            </div>

            <div className="game-interface">
                {!isPlaying && (
                    <div className="game-start">
                    <h2>Bienvenue dans le jeu de la tolérance</h2>
                    <p>
                        Votre personnage a une barre de tolérance qui diminue à chaque fois qu'il est confronté à une situation violente.
                        Vous devez l'aider à prendre des décisions pour réduire cette barre et survivre à la journée.
                    </p>
                    <p>Barre de tolérance actuelle : {tolerance}</p>
                    <Button onClick={handleStartGame} text="Commencer le jeu"/>
                    </div>
                )}
                {isPlaying && nbevenement > 0 && (
                    <section>
                        <div className="game-play">
                        <p>Barre de tolérance actuelle : {tolerance}</p>
                        <p>Situation : {nbevenement} / {6}</p>
                            {console.log(choosenSituations.length)}
                        {<CardSituation evenement={choosenSituations[0]}/>}

                        </div>
                        <div className="Action-respons">
                        {
                            selectedActions.map(item => {
                                {console.table("rentré avec : "+item)}
                                return (
                                    <article> <CardAction evenement={item} onDecision={handleDecision}/></article>
                                )
                            })
                        }
                        </div>
                    </section>
                )}
                {isPlaying && (
                    <div className="game-stop">
                        <Button onClick={handleStopGame} text="Arrêter le jeu"/>
                    </div>
                )}
                {isPlaying && nbevenement <= 0 && (
                    <>
                        <h3> Vous avez fini le jeu !</h3>
                        <h3> N'hésitez pas à tester tous les profils disponibles</h3>
                        <h3> Faites des dons sur paypal aussi</h3>

                        <div className="game-stop">
                            <a href="http://localhost:5173/">Revenir au menu</a>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

function RemoveEltFromTab(arr,element){
    const index = arr.indexOf(element);
    if (index !== -1) {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    }

    return arr;
}

export default GameInterface;