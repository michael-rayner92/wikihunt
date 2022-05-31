import { useContext } from 'react';
import { PageManagerContext } from '@context/PageManagerContext';

export const usePageManager = () => useContext(PageManagerContext);
