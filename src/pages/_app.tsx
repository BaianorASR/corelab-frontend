import { OFooter } from 'atomic/organisms/OFooter';
import type { AppProps } from 'next/app';
import { DatabaseProvider } from 'shared/contexts/SearchContext/SearchProvider';
import { ThemeProvider } from 'styled-components';
import { MainLayout } from 'styles/layouts/MainLayout';
import { light } from 'styles/themes/light.theme';

import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DatabaseProvider>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <MainLayout>
          <Component {...pageProps} />
          <OFooter />
        </MainLayout>
      </ThemeProvider>
    </DatabaseProvider>
  );
}

export default MyApp;
