import styled from 'styled-components';

export const SubscribeWrapper = styled.section`
  padding: 30px 0 60px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 2px solid rgba(128, 128, 128, 0.65);

  & h1 {
    font-size: ${({ theme }) => theme.text.headingOne};
  }
`;

export const SubscribeBody = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  & .subscribe__bottom {
    display: flex;
    margin-top: 1rem;
  }

  & .subscribe__input {
    width: 100%;
    padding: 5px 10px;

    font-size: 18px;
    font-family: inherit;

    border: 1px solid ${({ theme }) => theme.colors.primaryText};

    transition: box-shadow 120ms ease-in;

    & :active,
    :focus-within {
      outline: 0px;
      box-shadow: -4px -4px 0px 0px gray;
    }
  }
`;
