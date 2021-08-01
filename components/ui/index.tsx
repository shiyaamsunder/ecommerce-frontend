import React from 'react';

import {
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';

import { CardWrapper, GridWrapper, StyledBox, StyledFlex } from './styles';

export const Card: React.FunctionComponent<
  LayoutProps & FlexboxProps & SpaceProps & { hoverPointer?: boolean }
> = ({ children, ...rest }) => {
  return (
    <CardWrapper hoverPointer {...rest}>
      {children}
    </CardWrapper>
  );
};

export const Flex: React.FunctionComponent<
  FlexboxProps & PositionProps & LayoutProps & SpaceProps
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
  LayoutProps & FlexboxProps & PositionProps & SpaceProps
> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};
