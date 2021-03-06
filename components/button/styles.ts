import styled from 'styled-components';

import type { ButtonGroupProps, ButtonProps } from '.';

export const StyledButton = styled.button<ButtonProps>`
  width: 175px;
  height: 50px;

  font-family: inherit;
  font-size: 18px;
  font-weight: 500;

  background-color: ${({ theme, variant }) =>
    variant === 'solid' ? theme.colors.primaryText : 'transparent'};
  color: ${({ theme, variant }) =>
    variant === 'solid' ? 'white' : theme.colors.primaryText};

  border: 2px solid
    ${({ theme, variant }) =>
      variant === 'solid' ? 'transparent' : theme.colors.primaryText};
  cursor: pointer;

  transition: transform 120ms ease;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'solid' ? '#3a3a3a' : '#F5F5F5'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @media only screen and (max-width: 1000px) {
    width: 140px;
  }
`;

export const StyledButtonGroup = styled.div<ButtonGroupProps>`
  & > :not(:first-child) {
    margin-left: ${({ spacing }) => spacing ?? '10px'};
  }
`;
