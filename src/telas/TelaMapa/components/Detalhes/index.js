import React, { useCallback } from 'react';



import { Botao } from '../../../../globalComponents/Botoes/styles';
import { Container, Portrait, Info } from './styles';
import { useSelectedMap } from '../../../../providers/SelectedMapProvider';
import { useNavigate } from 'react-router-dom';

const Detalhes = () => {
    const navigate = useNavigate();

    const { selectedMap, setSelectedStage } = useSelectedMap();

    const entrarEstagio = useCallback( () => {
        setSelectedStage(selectedMap.nome);
        navigate('/batalha-A');
    }, [selectedMap]);

    return (
        <Container>
            <Portrait />
            <Info>
                <div>
                    { selectedMap.nome  && <h2>Estágio: { selectedMap.nome }</h2>}
                </div>
                <div>
                    { selectedMap.nivel  && <h2>Nível: { selectedMap.nivel }</h2>}
                </div>
                <div>
                    
                </div>
            </Info>
            <Botao theme={{ size: [60,6], margin: '10px auto 25px'}} onClick={ entrarEstagio.bind(this)}> Entrar </Botao>
        </Container>
    )
    
};

export default Detalhes;