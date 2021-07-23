import Head from 'next/head';
import { Footer, NavBar } from '../components';
import { Landing, ProductSection, SubscribeSection } from '../sections';
import { HomeWrapper } from '../styles/home.styles';
import { Category } from '../types';

export default function Home({ products }: { products: Category[] }) {
  return (
    <>
      <NavBar />

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
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://morioh-backend.herokuapp.com/api/products/categories'
  );
  const data = await res.json();

  return {
    props: {
      products: data
    }
  };
};
