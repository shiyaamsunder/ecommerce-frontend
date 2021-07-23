import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;

  width: 90%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p > a {
    text-decoration: underline;
    margin-left: 5px;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  width: 50%;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryText};

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 30px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormControl = styled.div`
  width: 100%;
  & > label {
    margin-bottom: 10px;
  }
  & .input__error {
    margin-left: 5px;
    font-size: 16px;
    color: red;
  }

  & > input {
    margin-bottom: 35px;
    margin-top: 10px;
  }
`;
