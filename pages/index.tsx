import Head from 'next/head';
import { Button, ButtonGroup, NavBar } from '../components';
import { Landing } from '../sections';
import { HomeWrapper } from '../styles/home.styles';

export default function Home() {
  return (
    <HomeWrapper>
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Ecommerce page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
    </HomeWrapper>
  );
}
