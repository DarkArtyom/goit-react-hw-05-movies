import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  padding: 0;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: silver;
  padding: 15px 15px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 20px;
  color: black;
  &.active {
    color: green;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: green;
    color: black;
  }
`;
