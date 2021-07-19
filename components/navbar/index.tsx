import styled from 'styled-components';
import { UserIcon, CartIcon } from '../icons';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 15px 80px;
  height: 70px;

  margin-bottom: 20px;

  & > .nav-logo {
    font-size: ${({ theme }) => theme.text.headingThree};
    margin: 0;
  }

  & > .nav-right {
    width: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1000px) {
    padding: 10px 20px;
  }
`;

export const NavBar = () => {
  return (
    <StyledNav>
      <h3 className="nav-logo">Morioh</h3>

      <div className="nav-right">
        <UserIcon />
        <CartIcon />
      </div>
    </StyledNav>
  );
};
