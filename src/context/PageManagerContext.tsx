import type { FC, ReactNode } from 'react';
import { createContext, useState } from 'react';
import type { WikiPageContent, WikiRandomPagesListItem } from '@services/wikiApi';
import { wikiApi } from '@services/wikiApi';

type LoadingTypes = 'idle' | 'fetching' | 'success' | 'error';

interface PageManagerState {
  selectedPage: string;
  page: WikiPageContent | null;
  pages: WikiRandomPagesListItem[];
  errorPage: string;
  errorPages: string;
  loadingPage: LoadingTypes;
  loadingPages: LoadingTypes;
}

const initialState: PageManagerState = {
  selectedPage: '',
  page: null,
  pages: [],
  errorPage: '',
  errorPages: '',
  loadingPage: 'idle',
  loadingPages: 'idle'
};

export const PageManagerContext = createContext({
  ...initialState,
  getPage: async (title: string) => {},
  getPages: async () => {}
});
PageManagerContext.displayName = 'PageManager';

export const PageManagerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPage, setSelectedPage] = useState('');
  const [page, setPage] = useState<WikiPageContent | null>(null);
  const [pages, setPages] = useState<WikiRandomPagesListItem[]>([]);
  const [errorPage, setErrorPage] = useState('');
  const [errorPages, setErrorPages] = useState('');
  const [loadingPage, setLoadingPage] = useState<LoadingTypes>('idle');
  const [loadingPages, setLoadingPages] = useState<LoadingTypes>('idle');

  async function getPages() {
    try {
      setLoadingPages('fetching');
      const response = await wikiApi.getRandomPages();
      setPages(response);
      setLoadingPages('success');
    } catch (err) {
      setLoadingPages('error');
      setErrorPages(String(err));
    }
  }

  async function getPage(title: string) {
    try {
      setLoadingPage('fetching');
      setSelectedPage(title);
      const response = await wikiApi.getPage(title);
      setPage(response);
      setLoadingPage('success');
    } catch (err) {
      setLoadingPage('error');
      setErrorPage(String(err));
    }
  }

  const state = {
    selectedPage,
    page,
    pages,
    errorPage,
    errorPages,
    loadingPage,
    loadingPages,
    getPage,
    getPages
  };

  return <PageManagerContext.Provider value={state}>{children}</PageManagerContext.Provider>;
};
