import React, { useContext } from 'react';

import Info from './components/Info';

import { Botao } from '../../../../globalComponents/Botoes/styles';
import { Container, Portrait } from './styles';
import ItemsPersonagemContext from '../../context/ItemsPersonagemContext';

const Detalhes = (props) => {
    const { itemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <Container>
            <Portrait img={ itemSelecionado.icone } />
            <Info item={itemSelecionado} />
            <Botao theme={{size:[60,6], margin: '0 auto 15px'}} onClick={() => {} }> Alterar </Botao>
        </Container>
    )
};

export default Detalhes;