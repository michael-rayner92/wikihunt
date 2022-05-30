import type { WikiRandomPagesListItem, WikiRandomPagesApiResponse } from '@services/wikiApi';

const generateWikiRandomPage = (
  overrides?: Partial<WikiRandomPagesListItem>
): WikiRandomPagesListItem => {
  return { id: 12345671, ns: 0, title: 'Random Page 1', ...overrides };
};

export const generateWikiRandomPagesResponse = (number = 5): WikiRandomPagesApiResponse => {
  const randomPages = Array.from({ length: number }, () => generateWikiRandomPage());

  return {
    batch: '',
    continue: {
      continue: '-||-',
      rncontinue: '0.750845944156|0.7508470574|55266889'
    },
    query: {
      random: randomPages
    }
  };
};
