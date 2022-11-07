import { Outlet } from 'react-router-dom';
import { StyledLink, Container, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <header>
        <Nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </header>
      <Outlet />
    </Container>
  );
};

export default Layout;
