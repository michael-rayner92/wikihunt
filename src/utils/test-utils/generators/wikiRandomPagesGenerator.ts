import type { WikiRandomPagesListItem, WikiRandomPagesApiResponse } from '@services/wikiApi';

const generateWikiRandomPage = (
  index: number,
  overrides?: Partial<WikiRandomPagesListItem>
): WikiRandomPagesListItem => {
  return {
    ns: 0,
    id: 12345671 + index,
    title: `Random Page ${index + 1}`,
    ...overrides
  };
};

export const generateWikiRandomPagesResponse = (number = 5): WikiRandomPagesApiResponse => {
  const randomPages = Array.from({ length: number }, (_el, index) => generateWikiRandomPage(index));

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
