import styled from 'styled-components';

export const OrderBox = styled.div`
    border-radius:10px;
    height:400px;
    flex-basis:600px;
    background-color: rgba(0,0,0,0.5);
`;

export const AquaContainerHeader = styled.header`
    display: flex;
    background-color: aqua;
    width: 100%;
    height: 100px;
    border-bottom: 2px #222 solid;
    box-sizing: border-box;
    border-radius:10px 10px 0 0;

    @media(max-width: 1000px) {
        width: 90%;
    }
`;

