import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const HomeStyling = styled.div`
  flex-grow:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

`;

export const CoolerHomeWrapper = styled.div`
  background: url("https://static.vecteezy.com/system/resources/previews/000/661/664/non_2x/chocolate-donut-and-coffee-breakfast-vector.png") no-repeat center;
  background-size: cover;

`;

export const HeaderWrapper = styled.div`
  margin-bottom: 1vh;
  border: hotpink solid 5px;
  border-radius: 300px;
  padding: 2rem;
  background: #9bf2d67b;
  text-align: center;
  margin-bottom: 1rem;
`;

export const HomeHeader = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: #222;
  text-shadow: 4px 4px hotpink;
`;

export const HomeSentence = styled.h2`
  font-size: 3rem;
  font-weight: 00;
  letter-spacing: 1px;
  line-height: 3.5rem;
  color: #222;
`;
