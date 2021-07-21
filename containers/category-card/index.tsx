import Image from 'next/image';
import { Box, Card, Flex } from '../../components';
import Link from 'next/link';

export const CategoryCard = ({
  image,
  category
}: {
  image: string;
  category: string;
}) => {
  return (
    <Link href="/products">
      <a>
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
