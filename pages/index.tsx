import Head from 'next/head';

import { Footer, NavBar } from '@components';
import HomeWrapper from '@styles/home.styles';
import { Category } from '@types';

import { Landing, ProductSection, SubscribeSection } from '../sections';

export default function Home({ products }: { products: Category[] }) {
  return (
    <>
      <NavBar />

      <HomeWrapper>
        <Head>
          <title>Ecommerce Next JS</title>
          <meta name="title" content="Ecommerce Next JS" />
          <meta
            name="description"
            content="Ecommerce website built using Next JS by Shiyaam Sunder."
          />
          <link rel="icon" href="/favicon.ico" />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://ecommerce-frontend-sigma.vercel.app/"
          />
          <meta property="og:title" content="Ecommerce Next JS" />
          <meta
            property="og:description"
            content="Ecommerce website built using Next JS by Shiyaam Sunder."
          />
          <meta
            property="og:image"
            content="https://ecommerce-frontend-sigma.vercel.app/landing.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://ecommerce-frontend-sigma.vercel.app/"
          />
          <meta property="twitter:title" content="Ecommerce Next JS" />
          <meta
            property="twitter:description"
            content="Ecommerce website built using Next JS by Shiyaam Sunder."
          />
          <meta
            property="twitter:image"
            content="https://ecommerce-frontend-sigma.vercel.app/landing.png"
          />
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
      products: data,
    },
  };
};
