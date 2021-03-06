import type { FC, ReactNode } from 'react';
import { createContext, useState } from 'react';
import type { WikiPageContent, WikiRandomPagesListItem } from '@services/wikiApi';
import { wikiApi } from '@services/wikiApi';

type LoadingTypes = 'idle' | 'fetching' | 'success' | 'error';

interface PageManagerState {
  selectedPages: string[];
  page: WikiPageContent | null;
  pages: WikiRandomPagesListItem[];
  errorPage: string;
  errorPages: string;
  loadingPage: LoadingTypes;
  loadingPages: LoadingTypes;
}

const initialState: PageManagerState = {
  selectedPages: [],
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
  getPages: async () => {},
  resetPages: async () => {}
});
PageManagerContext.displayName = 'PageManager';

export const PageManagerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
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
      setSelectedPages(prevState => [...prevState, title]);
      const response = await wikiApi.getPage(title);
      setPage(response);
      setLoadingPage('success');
    } catch (err) {
      setLoadingPage('error');
      setErrorPage(String(err));
    }
  }

  async function resetPages() {
    setSelectedPages([]);
    setPage(null);
    setPages([]);
    setErrorPage('');
    setErrorPages('');
    setLoadingPage('idle');
    setLoadingPages('idle');

    await getPages();
  }

  const state = {
    selectedPages,
    page,
    pages,
    errorPage,
    errorPages,
    loadingPage,
    loadingPages,
    getPage,
    getPages,
    resetPages
  };

  return <PageManagerContext.Provider value={state}>{children}</PageManagerContext.Provider>;
};
