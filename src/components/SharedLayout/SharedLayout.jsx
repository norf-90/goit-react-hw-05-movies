import { Outlet } from 'react-router-dom';
import { StyledLink, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <StyledLink to="/">Home</StyledLink>

        <StyledLink to="/movies">Movies</StyledLink>
      </Header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
