import React from "react";

function Header({character}) {
    return (
        <header>
                <p id="header">PROFILE : Name: {character.firstname} {character.lastname} | Age: {character.age} | Poids : {character.poids} | Sexe : {character.sexe} | taille: {character.taille} | origine: {character.origine} | tolérance: {character.tolerance}
                </p>

        </header>
    );
}

export default Header;