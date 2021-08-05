import { Product } from '@types';

export const singleProductMock: Product = {
  _id: '60f5a1970d07df36f04f505d',
  title: 'Samsung Galaxy M42 5G',
  price: 23999,
  description:
    'Time to live full throttle! The Monster is 5G ready with the blazing fast Snapdragon 750G 5G Processor that speeds up your downloads, streaming, gaming and all that you love to do.',
  image: 'https://m.media-amazon.com/images/I/71bmFRQaYCL._SL1500_.jpg',
  category: 'smartphone',
};

export const productsMock: Product[] = [
  {
    _id: '60f5a1970d07df36f04f505d',
    title: 'Samsung Galaxy M42 5G',
    price: 23999,
    description:
      'Time to live full throttle! The Monster is 5G ready with the blazing fast Snapdragon 750G 5G Processor that speeds up your downloads, streaming, gaming and all that you love to do.',
    image: 'https://m.media-amazon.com/images/I/71bmFRQaYCL._SL1500_.jpg',
    category: 'smartphone',
  },
  {
    _id: '60f5a1970d07df36f04f505e',
    title: 'Redmi Note 10 Shadow Black',
    price: 12999,
    description:
      'Display: FHD+. Camera: 48 MP Quad Rear camera. Qualcomm Snapdragon 678 with Kryo 460 Octa-core.',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71QY6JV6FhS._SL1500_.jpg',
    category: 'smartphone',
  },
];
