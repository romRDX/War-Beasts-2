import React from 'react';
import { useSelectedMap } from '../../../../providers/SelectedMapProvider';

import Estagio from './components/Estagio';

import { Background } from './styles.js';

const Mapa = () => {

    const { selectedMap } = useSelectedMap();
    const map = selectedMap();

    return (
        <Background>
            {
                map.estagios.map( estagio => (
                    <Estagio key={estagio.nome} estagio={estagio} />
                ))
            }
        </Background>
    ) 
}

export default Mapa;