/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { Layout } from '@components';
import { wrapper } from '@redux/store';
import GlobalStyles from '@styles/global';
import theme from '@styles/theme';

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
export default wrapper.withRedux(MyApp);
