import React, { useContext } from 'react'

import RacaContext from '../../../../context/RacasContext';

import { Container } from './styles.js';

const OpcaoRaca = ({ raca }) => {
    const { selecionarRaca } = useContext(RacaContext)

    return (
        <Container onClick={ () => selecionarRaca(raca) }>
            <h2>{raca.nome}</h2>
        </Container>
    );
        
};

export default OpcaoRaca;
