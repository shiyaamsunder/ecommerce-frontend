import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '@redux/hooks';
import { getUser, logout, replaceCart } from '@redux/slices';

import { Button } from '../button';
import { UserIcon, CartIcon } from '../icons';
import { GenericLink } from '../link';

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
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
      height: 100%;
      width: 80px;
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 10px 20px;
    & > .nav-right {
      width: 120px;
    }
  }
`;

export const NavBar = () => {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(
      replaceCart({
        totalPrice: 0,
        totalQuantity: 0,
        items: [],
      })
    );
  };

  return (
    <StyledNav>
      <GenericLink href="/" passHref>
        <h3 className="nav-logo">Morioh</h3>
      </GenericLink>

      <div className="nav-right">
        <GenericLink href="/cart" passHref>
          <CartIcon />
        </GenericLink>
        {!user.accessToken && !user.refreshToken ? (
          <GenericLink href="/login" passHref>
            <UserIcon />
          </GenericLink>
        ) : (
          <Button
            data-testid="logoutButton"
            onClick={logoutHandler}
            type="button"
          >
            Logout
          </Button>
        )}
      </div>
    </StyledNav>
  );
};
