import Head from 'next/head';
import { Footer } from '../components';
import { Landing, ProductSection, SubscribeSection } from '../sections';
import { HomeWrapper } from '../styles/home.styles';
import { urls } from '../config';

export interface Category {
  _id: string;
  category: string;
  image: string;
}

export default function Home({ products }: { products: Category[] }) {
  return (
    <HomeWrapper>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Ecommerce page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <ProductSection products={products} />
      <SubscribeSection />

      <Footer />
    </HomeWrapper>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://morioh-backend.herokuapp.com/api/products/categories'
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      products: data
    }
  };
};
