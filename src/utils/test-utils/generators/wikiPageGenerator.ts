import type { WikiPageApiResponse } from '@services/wikiApi';

export const generateWikiPageResponse = (
  title: string,
  overrides?: Partial<WikiPageApiResponse>
): WikiPageApiResponse => {
  return {
    parse: {
      title,
      pageid: 1234567,
      properties: {
        'wikibase-shortdesc': 'This is a short description',
        defaultsort: 'Default sort value',
        wikibase_item: 'Q566312'
      },
      links: [
        { ns: 0, title: 'link 1', exists: true },
        { ns: 0, title: 'link 2', exists: true }
      ]
    },
    ...overrides
  };
};
