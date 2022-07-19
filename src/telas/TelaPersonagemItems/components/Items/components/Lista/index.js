import React from 'react';

import { Container } from './styles.js';
import items from "../../../../../../Data/Itens-exemplo/index";
import Item from './components/Item';

const Habilidades = () => {

    console.log("A: ", items);

    return (
        <Container>
            {
                items.map((listItem) => <Item item={listItem} />)
            }
        </Container>
    ) 
}

export default Habilidades;