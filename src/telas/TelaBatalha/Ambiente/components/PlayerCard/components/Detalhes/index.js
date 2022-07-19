import React from 'react';
import { useCharacter } from '../../../../../../../providers/ChosenCharacterProvider';

import { Container } from './styles';
import { Portrait, Info, Life, Secundarios } from './styles';

const Detalhes = ({character}) => { 

    return (
        <Container>
            <div className='playerInfo'>
                <Portrait img={ character.portrait } />
                <Info>
                    <h3> {character.nome} </h3>
                    <Secundarios>
                        <h2 className="STR" > Dano : {character.atributos.STR} </h2>
                        <h2 className="DEXINT" > Precisão : {character.atributos.INT} </h2>
                        <h2 className="DEX" > C. Critico : {character.atributos.TOU} </h2>
                        <h2 className="STR" > Dano Critico : {character.atributos.DEX} </h2>
                        <h2 className="STRINT" > C. Atordoar : {character.atributos.CON} </h2>
                        <h2 className="DEXAGI" > Velocidade : {character.atributos.AGI} </h2>
                        <h2 className="CONINT" > Vigor : {character.atributos.AGI} </h2>
                        <h2 className="AGI" > Evasão : {character.atributos.AGI} </h2>
                        <h2 className="CON" > Pontos de Vida : {character.atributos.AGI} </h2>
                        <h2 className="TOU" > Defesa : {character.atributos.AGI} </h2>
                        <h2 className="AGITOU" > Resist. Critico : {character.atributos.AGI} </h2>
                        <h2 className="TOUCON" > Resist. Atordoar : {character.atributos.AGI} </h2>
                    </Secundarios>
                </Info>
                <Life>
                </Life>
            </div>
        </Container>
    )
};

export default Detalhes;
