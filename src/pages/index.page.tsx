import { useEffect, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { ArticleTracker } from '@components/article-tracker';
import { ArticleViewer } from '@components/article-viewer';
import { LinkCounter } from '@components/link-counter';
import { RandomList } from '@components/random-list';
import { StartInfo } from '@components/start-info';
import { Target } from '@components/target';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const modalProps = useDisclosure();
  const pageInitialised = useRef(false);

  useEffect(() => {
    if (pageInitialised.current) return;
    pageInitialised.current = true;

    modalProps.onOpen();
  }, [modalProps]);

  return (
    <>
      <StartInfo isOpen={modalProps.isOpen} onClose={modalProps.onClose} />
      <ArticleTracker />
      <RandomList />
      <ArticleViewer />
      <LinkCounter />
      <Target />
    </>
  );
};

export default Home;
