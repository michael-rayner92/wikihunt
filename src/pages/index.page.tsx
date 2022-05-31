import { useEffect, useRef } from 'react';
import { Grid, GridItem, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { ArticleTracker } from '@components/article-tracker';
import { ArticleViewer } from '@components/article-viewer';
import { LinkCounter } from '@components/link-counter';
import { RandomList } from '@components/random-list';
import { StartInfo } from '@components/start-info';
import { Target } from '@components/target';
import { usePageManager } from '@hooks/usePageManager';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const modalProps = useDisclosure();
  const pageInitialised = useRef(false);
  const { selectedPages } = usePageManager();

  const selectedPageCount = selectedPages.length;

  useEffect(() => {
    if (pageInitialised.current) return;
    pageInitialised.current = true;

    modalProps.onOpen();
  }, [modalProps]);

  return (
    <>
      <StartInfo isOpen={modalProps.isOpen} onClose={modalProps.onClose} />
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: '5', md: '6' }}>
        <LinkCounter />
        <Target />
      </SimpleGrid>
      <Grid
        templateRows={{ base: 'repeat(2, 1fr)', md: '1fr' }}
        templateColumns={{ base: '1fr', md: '2fr 1fr' }}
        gap={{ base: '5', md: '6' }}
      >
        <GridItem>{!selectedPageCount ? <RandomList /> : <ArticleViewer />}</GridItem>
        <GridItem>
          <ArticleTracker />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
