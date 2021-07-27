import { Link } from 'react-scroll';

import { Button, ButtonGroup } from '@components';

import { LandingLeft, LandingRight, LandingWrapper } from './styles';

export const Landing = () => {
  return (
    <LandingWrapper>
      <LandingLeft>
        <h1 className="landing__heading">Welcome</h1>
        <p className="landing__text">
          Metus vitae vehicula amet venenatis ut vestibulum egestas mauris non
          vitae mauris lectus mattis purus fames massa nibh vulputate libero dis
          tempus, nibh sollicitudin convallis fringilla porttitor magna viverra
          auctor
        </p>
        <ButtonGroup spacing="40px">
          <Link to="#products" href="#products" offset={-50}>
            <Button variant="solid">Shop Now</Button>
          </Link>
          <Link to="#subscribe" href="#subscribe" offset={-50}>
            <Button variant="outline">Subscribe</Button>
          </Link>
        </ButtonGroup>
      </LandingLeft>

      <LandingRight>
        <img src="/landing.png" alt="landingpage" />
      </LandingRight>
    </LandingWrapper>
  );
};
