import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import RacasContext from './context/RacasContext';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import personagemFactory from './functions/personagemFactory';

import { Container } from './styles.js';
import { useCharactersList } from '../../../../providers/CharactersListProvider';

const TelaRacas = () => {
    const navigate = useNavigate();
    const { addToList } = useCharactersList();

    const [raca, setRaca ] = useState();

    const selecionarRaca = useCallback( (racax) => {
        setRaca(racax);
    },[]);

    const criarPersonagem = useCallback( () => {
        if (raca) {
            const nomePersonagem = document.getElementById('nomePersonagem').value;
            const novoPersonagem = personagemFactory(raca, 1, nomePersonagem);
            addToList(novoPersonagem);
            navigate('/personagens');
        }
    }, [raca]);

    return (
        <Container>
            <RacasContext.Provider value={{ raca, criarPersonagem, selecionarRaca }}>
                <Detalhes />
                <Opcoes />
            </RacasContext.Provider>
        </Container>
    )
};

export default TelaRacas;
