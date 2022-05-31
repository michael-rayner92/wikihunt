import { useEffect, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { ArticleViewer } from '@components/article-viewer';
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
      <RandomList />
      <ArticleViewer />
      <Target />
    </>
  );
};

export default Home;
