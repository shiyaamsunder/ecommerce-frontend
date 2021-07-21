import styled from 'styled-components';

export const LandingWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 40px 0 60px 0;

  border-bottom: 2px solid #808080a6;

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;

export const LandingLeft = styled.div`
  width: 50%;

  & .landing__heading {
    font-size: ${({ theme }) => theme.text.headingXL};
    margin-bottom: 30px;
  }

  & .landing__text {
    font-style: italic;
    margin-bottom: 100px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 960px) {
    width: 100%;

    & .landing__heading {
      margin: 20px auto;
      font-size: 50px;
    }

    & .landing__text {
      margin-bottom: 50px;
      font-size: 18px;
    }
  }
`;

export const LandingRight = styled.div`
  & > img {
    height: 500px;
    box-shadow: -12px -12px 0px 0px rgba(255, 224, 202, 1),
      -24px -24px 0px 0px rgba(255, 236, 222, 1),
      -36px -36px 0px 0px rgba(255, 246, 240, 1);

    object-fit: contain;
  }

  @media only screen and (max-width: 960px) {
    & > img {
      height: 300px;
    }
  }
`;
