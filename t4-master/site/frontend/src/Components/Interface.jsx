import { useEffect, useState } from "react";
import * as PersonAPI from '../api/person';
import GameInterface from "./GameInterface";
import Header from "./Header"

function Interface({selectedcharacter}) {
    console.log("selecteddcharacter : "+selectedcharacter)
    return <div>
            <Header character={selectedcharacter} /> 
            <GameInterface character={selectedcharacter} /> 
    </div>             
}

export default Interface;