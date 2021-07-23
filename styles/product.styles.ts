import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 50%;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  height: 10%;

  @media only screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;
export const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.bgAccent};

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  height: 70%;
  width: 80%;
  margin: 0px auto;

  & h1 {
    font-size: 32px;
    line-height: 1.8;
  }

  & p {
    line-height: 1.8;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 768px) {
    height: auto;

    padding: 0px 0px 40px;
  }
`;

export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  & .price {
    font-family: 'Prata', sans-serif;
    font-size: 24px;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
