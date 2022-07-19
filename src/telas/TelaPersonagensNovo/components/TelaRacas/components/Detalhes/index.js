import React, { useContext } from 'react';

import RacaContext from '../../context/RacasContext';

import NomePersonagem from './components/NomePersonagem';
import CriarPersonagem from './components/CriarPersonagem';
import Caracteristicas from './components/Caracteristicas';

import { Container, Container_2 , Descricao } from './styles';

const Detalhes = () => {
    const { raca } = useContext(RacaContext);

    return (
        <Container>
            <Descricao>
                { raca && raca.nome }
            </Descricao>
            <Caracteristicas />
            <Container_2>
                <NomePersonagem />
                <CriarPersonagem />
            </Container_2>
        </Container>
    );
};

export default Detalhes;