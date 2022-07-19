import React from 'react';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import { Container } from './styles.js';

const TelaTribos = ({ confirmarTribo }) => (
    <Container>
        <Detalhes func={confirmarTribo} />
        <Opcoes />
    </Container>
);

export default TelaTribos;
