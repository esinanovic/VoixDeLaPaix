import React from "react";

export function CardSituation({ evenement }) {
    return (
        <div className="violent-evenement-card">
            <div className="evenement-description">
                <h3>Location : {evenement.location}</h3>
                <h3>{evenement.label}</h3>
                {/*<h3>{evenement.severity}</h3>*/}
            </div>
        </div>
    );
}

export function CardAction({ evenement, onDecision }) {
    return (
        <div className="violent-evenement-card">
            <div className="evenement-description">
                <h3>{evenement.label}</h3>
            </div>
            <button onClick={() => onDecision(evenement)}>Choisir</button>
        </div>
    );
}