import Image from 'next/image';

import { Box, Card, Flex, GenericLink } from '@components';

export const ProductCard = ({
  image,
  id,
  title,
  category,
}: {
  image: string;
  title: string;
  id: string;
  category: string;
}) => {
  return (
    <GenericLink href={`/products/${category}/${id}`} passHref>
      <Card>
        <Flex flexDirection="column" alignItems="center">
          <Box width="140px" height="250px" position="relative">
            <Image src={image} alt={title} layout="fill" objectFit="contain" />
          </Box>
          <h3 className="title">{title}</h3>
        </Flex>
      </Card>
    </GenericLink>
  );
};
