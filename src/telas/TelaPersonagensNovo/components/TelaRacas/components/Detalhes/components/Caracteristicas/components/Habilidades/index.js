import React, { useContext } from 'react';

import { Container } from './styles';
import RacaContext from '../../../../../../context/RacasContext';

const Habilidades = () => {
    const { raca } = useContext(RacaContext);

    return (
        <Container>
            <div>{ raca && raca.habilidades[0].nome}</div>
        </Container>
    )
    
};

export default Habilidades;
