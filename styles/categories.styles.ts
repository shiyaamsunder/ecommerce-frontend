import styled from 'styled-components';

export const CategoriesWrapper = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 100px;

  & .title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
  }
`;

export const CategoriesTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: capitalize;
`;

export const CategoriesBottom = styled.div`
  padding-bottom: 50px;
`;
