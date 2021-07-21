import styled from 'styled-components';

export const ProductWrapper = styled.section`
  padding: 30px 0 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 2px solid rgba(128, 128, 128, 0.65);

  & .products__heading {
    font-size: ${({ theme }) => theme.text.headingOne};
  }
`;
