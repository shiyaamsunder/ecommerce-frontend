import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 5px 10px;

  font-size: 18px;
  font-family: inherit;

  border: 1px solid ${({ theme }) => theme.colors.secondaryText};

  transition: box-shadow 120ms ease-in;

  & :active,
  :focus-within {
    outline: 0px;
    box-shadow: -4px -4px 0px 0px ${({ theme }) => theme.colors.secondaryText};
    border: 1px solid ${({ theme }) => theme.colors.primaryText};
  }
`;
