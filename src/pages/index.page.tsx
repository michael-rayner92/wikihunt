import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { wikiApi } from '@services/wikiApi';
import type { WikiPageContent, WikiRandomPagesListItem } from '@services/wikiApi';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [pages, setPages] = useState<WikiRandomPagesListItem[]>([]);
  const [page, setPage] = useState<WikiPageContent>();
  const [selectedPage, setSelectedPage] = useState('');

  const onPageClick = (_e: MouseEvent<HTMLLIElement>, el: WikiRandomPagesListItem) => {
    setSelectedPage(el.title);
  };

  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    const getRandomPages = async () => {
      isLoaded.current = true;
      const response = await wikiApi.getRandomPages();
      setPages(response);
    };

    getRandomPages().catch(console.error);
  }, []);

  useEffect(() => {
    if (!selectedPage) return;

    const getPage = async () => {
      const response = await wikiApi.getPage(selectedPage);
      setPage(response);
    };

    getPage().catch(console.error);
  }, [selectedPage]);

  return (
    <div>
      <ul>
        {pages.map(pageData => (
          <li key={pageData.id} onClick={e => onPageClick(e, pageData)}>
            {pageData.title}
          </li>
        ))}
      </ul>

      <div>{JSON.stringify(page)}</div>
    </div>
  );
};

export default Home;
