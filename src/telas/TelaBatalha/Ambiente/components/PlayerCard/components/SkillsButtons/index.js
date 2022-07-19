import React from 'react';

import { Container, Buttons, EnergyBar, Skill } from "./styles";

const SkillsButtons = ({character}) => {
    
    return (
        <Container>
            <Buttons>
                {
                    character.habilidades.map( hab => (
                        <Skill key={hab.nome} className='skill' icone={hab.icone}>
                            <h2>{hab.custo}</h2>
                            <img src={hab.icone} />
                        </Skill>
                    ))
                }
            </Buttons>
            <EnergyBar>
                    <div className='skill'></div>
                    <div className="bar" ></div>
            </EnergyBar>
        </Container>
    )
}

export default SkillsButtons;