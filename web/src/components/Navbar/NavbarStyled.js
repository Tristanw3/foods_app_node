import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarBackground = styled.nav`
    min-height:70px;
    background-color: #222;
    width: 100%;
    color: white;   
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
	align-items: center;
`;

export const LeftNav = styled.div`
    flex-basis:300px;
    display:flex;
    justify-content:center;
`;
export const RightNav = styled.div`
    flex-grow:1;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-end;
`;

export const NavItem = styled(Link)`
    text-decoration:none;
    flex-basis:100px;
    padding:20px;
    background-color: #222;
    color:white;
    text-align:center;
    &:hover {
        color:hotpink;
    }
`;

export const NavBrand = styled(NavItem)`
  font-size:20px;
  flex-basis:200px;
  
  text-align: center;
  font-weight:bold;
`;





