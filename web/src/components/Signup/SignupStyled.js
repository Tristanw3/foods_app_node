import styled from 'styled-components';
import { Page } from '../Common/Page'

export const SignupPage = styled(Page)`
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const SignupStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color:rgba(0,0,0,0.2);
  border-radius:30px;
  padding:30px;
`;

export const SignupHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #222;
  text-shadow: 4px 4px hotpink;
  margin-bottom: 1.5rem;
`;

