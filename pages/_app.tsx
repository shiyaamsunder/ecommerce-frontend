import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Layout } from '../components/layout';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
