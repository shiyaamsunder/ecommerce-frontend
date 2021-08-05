import React, { FC, ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { wrapper } from '@redux/store';
import theme from '@styles/theme';

// TODO wrap redux provider.
const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: wrapper.withRedux(AllTheProviders), ...options });

export * from '@testing-library/react';
export { customRender as render };
