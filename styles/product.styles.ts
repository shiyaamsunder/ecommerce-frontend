import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 60%;
    padding: 2rem;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100px;
  padding: 20px;

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
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bgAccent};

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Details = styled.div`
  height: 100%;
  width: 80%;
  margin: 0px auto;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & h1 {
    font-size: 28px;
    line-height: 1.4;
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

  margin-bottom: 40px;

  & .price {
    font-family: 'Prata', sans-serif;
    font-size: 24px;
  }

  & .amount {
    display: flex;
  }

  & .amount__button {
    background-color: transparent;
    color: inherit;
    border: none;
    transition: transform 100ms ease-in;

    cursor: pointer;
  }

  & .amount__button:active,
  .amount__button:focus > svg {
    transform: scale(1.1);
  }

  & .amount__input {
    font-size: 18px;
    width: 50px;
    padding: 2px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #4e4e4e;
    font-family: 'Prata', 'sans-serif';
    user-select: none;
    background-color: white;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
