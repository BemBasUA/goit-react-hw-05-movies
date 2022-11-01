import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: #000;
  padding: 5px 10px;
  font-size: 30px;
  text-decoration: none;
  &.active {
    color: #8e0303;
  }
`;
export const Header = () => {
  return (
    <header>
      <StyledLink to={'/'} end>
        Home
      </StyledLink>
      <StyledLink to={'/movies'}>Movies</StyledLink>
    </header>
  );
};
