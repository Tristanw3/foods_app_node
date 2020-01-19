import styled from 'styled-components';
import { Page } from '../Common/Page'

export const Account = styled(Page)`
  display:flex;
  
`;

export const Main = styled.div`
  flex-grow:1;
  display:flex;
  justify-content:space-between;
  padding:50px;
`;


export const YellowAside = styled.div`
  padding:20px;
  width:200px;
  background: #f2e266;
  display: flex;
  flex-direction:column;
`;

export const YellowBannerHeader = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 90%;
    }
`;

