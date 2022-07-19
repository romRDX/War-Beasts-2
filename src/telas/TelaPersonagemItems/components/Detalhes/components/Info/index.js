import React, { useContext } from 'react';

import { Container } from './styles';

const Info = ({ item }) => {

    return (
        <Container>
            { item.nome && <h1>{ item.desc }</h1> }
                
                
            
        </Container>
    )
    
};

export default Info;