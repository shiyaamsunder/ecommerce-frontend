import React from 'react';
import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps
} from 'styled-system';
import { CardWrapper, GridWrapper, StyledBox, StyledFlex } from './styles';

export const Card: React.FunctionComponent<LayoutProps & FlexboxProps> = ({
  children,
  ...rest
}) => {
  return <CardWrapper {...rest}>{children}</CardWrapper>;
};

export const Flex: React.FunctionComponent<
  FlexboxProps & PositionProps & LayoutProps
> = ({ children, ...rest }) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};

export const Grid: React.FunctionComponent<GridProps> = ({
  children,
  ...rest
}) => {
  return <GridWrapper {...rest}>{children}</GridWrapper>;
};

export const Box: React.FunctionComponent<
  LayoutProps & FlexboxProps & PositionProps
> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};
