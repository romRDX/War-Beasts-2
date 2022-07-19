import React, { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Info, Portrait, Atributos, Detalhes, Divisor } from './styles.js';
import PersonagensContext from '../../../../context/PersonagensContext';
import { useCharacter } from '../../../../../../providers/ChosenCharacterProvider.js';

const Personagem = () => {
    const { setChosenCharacter } = useCharacter();
    const navigate = useNavigate();
    const { personagemSelecionado } = useContext(PersonagensContext);

    const chooseChar = useCallback( () => {
        setChosenCharacter(personagemSelecionado);
        navigate('/principal');
    }, [personagemSelecionado]);

    return (
        <Info>
            { personagemSelecionado.atributos && 
            <>
                <h1>Prefixo - {personagemSelecionado.nome} - Sufixo</h1>
                <Portrait ></Portrait>
                <Divisor>
                    <h2>Detalhes</h2>
                    <Detalhes>
                        <div>level {personagemSelecionado.nivel}</div>
                        <div>{personagemSelecionado.classe}</div>
                        <div>Guild Name</div>
                    </Detalhes>
                </Divisor>
                <Divisor>
                    <h2>Atributos</h2>
                    <Atributos>
                        <div className="STR" >STR : {personagemSelecionado.atributos.STR}</div>
                        <div className="DEX" >DEX : {personagemSelecionado.atributos.DEX}</div>
                        <div className="CON" >CON : {personagemSelecionado.atributos.CON}</div>
                        <div className="INT" >INT : {personagemSelecionado.atributos.INT}</div>
                        <div className="TOU" >TOU : {personagemSelecionado.atributos.TOU}</div>
                        <div className="AGI" >AGI : {personagemSelecionado.atributos.AGI}</div>
                    </Atributos>
                </Divisor> 
                <button onClick={chooseChar}> Entrar </button>
            </>
            }
        </Info>
    )

}

export default Personagem;
