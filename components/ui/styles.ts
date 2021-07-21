import styled from 'styled-components';
import {
  flex,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  height,
  HeightProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  width,
  WidthProps
} from 'styled-system';

export const CardWrapper = styled.div`
  ${flex}
  padding: 20px 30px;
  width: 100%;
  height: auto;

  border: 1px solid rgba(78, 78, 78, 0.4);

  transition: box-shadow 120ms ease-in;

  cursor: pointer;

  & h1 {
    text-transform: capitalize;
  }

  &:hover {
    box-shadow: 5px 5px 0px rgba(78, 78, 78, 0.4);
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
