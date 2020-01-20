import styled from 'styled-components';
import { Page } from '../Common/Page'

export const LoginPage = styled(Page)`
  display: flex;
  justify-content: center;
  align-items:center;
`;


export const LoginBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:rgba(0,0,0,0.2);
  border-radius:30px;
  padding:30px;
  height:400px;
  input {
    height:5px;
  }
`;

export const LoginHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #222;
  text-shadow: 4px 4px hotpink;
  margin-bottom: 1.5rem;
`;
