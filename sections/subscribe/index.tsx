import { Button } from '@components';
import { SubscribeWrapper } from './styles';

export const SubscribeSection = () => {
  return (
    <SubscribeWrapper>
      <h1 id="#subscribe">Subscribe</h1>

      <div className="subscribe__body">
        <p>
          Minus ipsa voluptatum dolore fugit hic corrupti quae ducimus rem
          voluptatem! Alias illo consequatur perspiciatis modi inventore
          excepturi, fuga libero eaque ullam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Expedita laudantium sapiente aliquam
          tempora sed! Molestias magnam repudiandae repellat sint labore optio
          alias, porro veritatis incidunt ea omnis doloremque atque perferendis?
        </p>
        <p>
          Minus ipsa voluptatum dolore fugit hic corrupti quae ducimus rem
          voluptatem! Alias illo consequatur perspiciatis modi inventore
          excepturi, fuga libero eaque ullam.
        </p>

        <form className="subscribe__bottom">
          <input type="email" className="subscribe__input" />
          <Button
            onClick={(e) => {
              e.preventDefault();
              alert('Hello');
            }}
            variant="solid"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </SubscribeWrapper>
  );
};
