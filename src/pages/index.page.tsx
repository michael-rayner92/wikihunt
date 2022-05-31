import { useEffect, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { RandomList } from '@components/random-list';
import { StartInfo } from '@components/start-info';
import { Target } from '@components/target';
import { usePageManager } from '@hooks/usePageManager';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { page } = usePageManager();

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
      <Target />

      <div>{page && JSON.stringify(page)}</div>
    </>
  );
};

export default Home;
