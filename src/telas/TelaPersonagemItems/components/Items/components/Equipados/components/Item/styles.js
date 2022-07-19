import styled from 'styled-components';

export const CustomLi = styled.li`
    list-style-type: none;
    height: 160px;
    width: 140px;
    display: flex;
    flex-direction: column;
    margin: 15px 30px;
    box-shadow: 0 0 0 3px ${ props => props.isSelected ? "red" : "transparent" };
    padding: 2px 2px 5px;

    img {
        height: 130px;
        width: 130px;
        margin: auto;
    }
`;
