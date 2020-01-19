import styled from 'styled-components';

export const AccountCard = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    width: 90%;
    }
`;

export const ItemSection = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 1rem;
`;

export const DateSection = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  height: 100%;
  font-size: 1.5rem;
`;

export const TotalSection = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 600;
`;