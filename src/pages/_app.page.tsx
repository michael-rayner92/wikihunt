import { theme } from '@chakra-ui/pro-theme';
import { Box, Container, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Meta } from '@components/meta';
import { PageManagerProvider } from '@context/PageManagerContext';
import { Footer } from '@layouts/footer';
import { Navbar } from '@layouts/navbar';
import type { NextPage } from 'next';
import '@fontsource/inter/variable.css';

type EnhancedAppProps = AppProps & {
  Component: NextPage;
};

const MyApp: NextPage<EnhancedAppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Meta />
      <PageManagerProvider>
        <Box as="section" height="100vh" overflowY="auto">
          <Navbar />
          <Container as="main" pt={{ base: '8', lg: '12' }} pb={{ base: '12', lg: '24' }}>
            {getLayout(<Component {...pageProps} />)}
          </Container>
          <Footer />
        </Box>
      </PageManagerProvider>
    </ChakraProvider>
  );
};

export default MyApp;
