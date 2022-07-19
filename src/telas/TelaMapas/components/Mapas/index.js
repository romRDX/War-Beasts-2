import React from 'react';

import mapas from '../../../../Data/Mapas';

import Mapa from './Components/Mapa';

import { Mapas, Tokens } from './styles';
import { useSelectedMap } from '../../../../providers/SelectedMapProvider';

const MapaEstagios = () => {

    const { mapTokens } = useSelectedMap();
    
    return (
        <Mapas>
            <Tokens>{ mapTokens }</Tokens>
            {
                
                mapas.map( mapa => (
                    <Mapa key={mapa.nome} mapa={mapa} />
                ))
            }
        </Mapas>
    )
}

export default MapaEstagios;