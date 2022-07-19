import React from 'react';

import { Dado} from './styles';

const ListaItems = ({dados, selecionar}) => {

    console.log("B: ", dados);

    return <>
    {
       dados && dados.map( dado => (
            <Dado key={dado.nome} icone={ dado.icone } onClick={ () => selecionar && selecionar(dado) } />
        ))
    }
    </>                     
};

export default ListaItems;