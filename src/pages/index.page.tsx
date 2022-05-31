/* eslint-disable @typescript-eslint/no-misused-promises */
import type { MouseEvent } from 'react';
import { useEffect, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { StartInfo } from '@components/start-info';
import { Target } from '@components/target';
import { usePageManager } from '@hooks/usePageManager';
import type { WikiRandomPagesListItem } from '@services/wikiApi';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { page, pages, getPage } = usePageManager();

  const modalProps = useDisclosure();
  const pageInitialised = useRef(false);

  const onPageClick = async (_e: MouseEvent<HTMLLIElement>, el: WikiRandomPagesListItem) => {
    await getPage(el.title);
  };

  useEffect(() => {
    if (pageInitialised.current) return;
    pageInitialised.current = true;

    modalProps.onOpen();
  }, [modalProps]);

  return (
    <>
      <StartInfo isOpen={modalProps.isOpen} onClose={modalProps.onClose} />
      <Target />

      <ul>
        {pages.map(pageData => (
          <li key={pageData.id} onClick={e => onPageClick(e, pageData)}>
            {pageData.title}
          </li>
        ))}
      </ul>

      <div>{page && JSON.stringify(page)}</div>
    </>
  );
};

export default Home;
