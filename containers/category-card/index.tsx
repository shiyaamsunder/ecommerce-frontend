import Image from 'next/image';

import { Box, Card, Flex, GenericLink } from '@components';

export const CategoryCard = ({
  image,
  category,
}: {
  image: string;
  category: string;
}) => {
  return (
    <GenericLink href={`/products/${category}`} passHref>
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
    </GenericLink>
  );
};
