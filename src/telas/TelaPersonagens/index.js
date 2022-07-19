import React, { useState, useEffect, useCallback } from 'react';

import PersonagensContext from './context/PersonagensContext';

import { Selecao } from "./styles.js";
import Miniaturas from './components/Miniaturas';
import PersonagemInfo from './components/PersonagemInfo';
import { useCharactersList } from "../../providers/CharactersListProvider";

const TelaPersonagens = () => {

    const { charactersList } = useCharactersList();

    const [ personagemSelecionado, setarPersonagemSelecionado ] = useState(charactersList[0]);

    const selecionarPersonagem = useCallback( (personagemSelecionado) => {
        setarPersonagemSelecionado(personagemSelecionado);
    },[personagemSelecionado]);

    // useEffect( ()=> {

    //     return () => {

    //     };

    // }, [personagemSelecionado]);

    return (
        <Selecao>
            <PersonagensContext.Provider value={{ selecionarPersonagem, personagemSelecionado }}>
                <Miniaturas />
                <PersonagemInfo />
            </PersonagensContext.Provider>
        </Selecao>
    )

}

export default TelaPersonagens;