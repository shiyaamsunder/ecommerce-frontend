import Link from 'next/link';
import styled from 'styled-components';
import { UserIcon, CartIcon } from '../icons';

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  padding: 15px 80px;
  height: 70px;

  z-index: 20;

  & .nav-logo {
    font-size: ${({ theme }) => theme.text.headingThree};
    margin: 0;
  }

  & > .nav-right {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 1000px) {
    padding: 10px 20px;
  }
`;

export const NavBar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <a>
          <h3 className="nav-logo">Morioh</h3>
        </a>
      </Link>

      <div className="nav-right">
        <Link href="/login" passHref>
          <a>
            <UserIcon />
          </a>
        </Link>
        <Link href="/cart" passHref>
          <a>
            <CartIcon />
          </a>
        </Link>
      </div>
    </StyledNav>
  );
};
