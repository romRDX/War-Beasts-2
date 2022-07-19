import React from 'react';
import { useCharacter } from '../../../../providers/ChosenCharacterProvider';

import { Container, Atributo, Principais, Secundarios } from './styles';

const Atributos = () => {
    const { getMyCharacter } = useCharacter();
    const myCharacter = getMyCharacter();
    
    return (
        <Container>
            <Principais>
                <Atributo className="STR" > STR : {myCharacter.atributos.STR} </Atributo>
                <Atributo className="DEX" > DEX : {myCharacter.atributos.DEX} </Atributo>
                <Atributo className="CON" > CON : {myCharacter.atributos.CON} </Atributo>
                <Atributo className="INT" > INT : {myCharacter.atributos.INT} </Atributo>
                <Atributo className="TOU" > TOU : {myCharacter.atributos.TOU} </Atributo>
                <Atributo className="AGI" > AGI : {myCharacter.atributos.AGI} </Atributo>
            </Principais>        
            <Secundarios>
                <Atributo className="STR" > Dano : {myCharacter.atributos.STR} </Atributo>
                <Atributo className="DEXINT" > Precisão : {myCharacter.atributos.INT} </Atributo>
                <Atributo className="DEX" > Chance de Critico : {myCharacter.atributos.TOU} </Atributo>
                <Atributo className="STR" > Dano Critico : {myCharacter.atributos.DEX} </Atributo>
                <Atributo className="STRINT" > Chance de Atordoar : {myCharacter.atributos.CON} </Atributo>
                <Atributo className="DEXAGI" > Velocidade : {myCharacter.atributos.AGI} </Atributo>
                <Atributo className="CONINT" > Vigor : {myCharacter.atributos.AGI} </Atributo>
                <Atributo className="AGI" > Evasão : {myCharacter.atributos.AGI} </Atributo>
                <Atributo className="CON" > Pontos de Vida : {myCharacter.atributos.AGI} </Atributo>
                <Atributo className="TOU" > Defesa : {myCharacter.atributos.AGI} </Atributo>
                <Atributo className="AGITOU" > Resistencia a Critico : {myCharacter.atributos.AGI} </Atributo>
                <Atributo className="TOUCON" > Resistencia a Atordoar : {myCharacter.atributos.AGI} </Atributo>
            </Secundarios>
        </Container>
    )
};

export default Atributos;
