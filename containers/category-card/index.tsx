import Image from 'next/image';
import Link from 'next/link';

import { Box, Card, Flex } from '@components';

export const CategoryCard = ({
  image,
  category,
}: {
  image: string;
  category: string;
}) => {
  return (
    <Link href={`/products/${category}`} passHref>
      <a href="dummy">
        <Card>
          <Flex flexDirection="column" alignItems="center">
            <Box width="200px" height="300px" position="relative">
              <Image
                src={image}
                alt={category}
                layout="fill"
                objectFit="contain"
              />
            </Box>
            <h1>{category}</h1>
          </Flex>
        </Card>
      </a>
    </Link>
  );
};
