import React from 'react';

import { StyledButton, StyledButtonGroup } from './styles';

export interface ButtonProps {
  variant?: 'solid' | 'outline';
}

type ButtonElement = React.FunctionComponent<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export const Button: ButtonElement = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export interface ButtonGroupProps {
  spacing?: string;
}
export const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({
  children,
  ...rest
}) => {
  return <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>;
};
