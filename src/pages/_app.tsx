import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { MainLayout } from 'styles/layouts/MainLayout';
import { light } from 'styles/themes/light.theme';

import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
