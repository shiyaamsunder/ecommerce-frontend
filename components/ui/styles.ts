import styled from 'styled-components';
import {
  flex,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
} from 'styled-system';

export const CardWrapper = styled.div<LayoutProps & FlexboxProps>`
  ${flex}
  ${layout}
  padding: 20px 30px;
  width: 100%;
  height: auto;

  border: 1px solid ${({ theme }) => theme.colors.secondaryText};

  transition: box-shadow 120ms ease-in;

  cursor: pointer;

  & h1 {
    text-transform: capitalize;
  }

  & .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;

    text-align: center;
  }

  &:hover {
    box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.secondaryText};
  }
`;

export const StyledFlex = styled.div<
  FlexboxProps & PositionProps & LayoutProps
>`
  ${layout}
  ${flexbox}
  ${position}
  display: flex;
`;

export const GridWrapper = styled.div<GridProps & FlexboxProps>`
  ${grid}
  width: 100%;
  display: grid;
`;

export const StyledBox = styled.div<LayoutProps & FlexboxProps & PositionProps>`
  ${layout}
  ${flexbox}
  ${position}
`;
