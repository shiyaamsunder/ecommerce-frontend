import Link from 'next/link';
import styled from 'styled-components';
import { Flex, Grid } from '../ui';

const StyledFooter = styled.footer`
  padding: 30px 0 60px;
`;

const FooterLinksWrapper = styled.div`
  margin: 0px 10px;
  & h3 {
    font-size: ${({ theme }) => theme.text.headingThree};
  }

  & p {
    font-weight: 500;
  }
  width: 100%;

  & ul {
    padding: 0;
  }
  & li {
    list-style: none;
    padding: 10px 0px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        flexDirection={['column', 'row']}
      >
        <FooterLinksWrapper>
          <h3>Morioh</h3>
        </FooterLinksWrapper>

        <Flex width="100%" flexDirection={['column', 'row']}>
          <FooterLinksWrapper>
            <p>Links</p>

            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>All Products</a>
                </Link>
              </li>
            </ul>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <p>Hello</p>

            <ul>
              <li>Support</li>
              <li>All Products</li>
            </ul>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <p>Hello</p>

            <ul>
              <li>Support</li>
              <li>All Products</li>
            </ul>
          </FooterLinksWrapper>
        </Flex>
      </Flex>
    </StyledFooter>
  );
};
