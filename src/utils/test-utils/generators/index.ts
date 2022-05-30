import { generateWikiPageResponse } from './wikiPageGenerator';
import { generateWikiRandomPagesResponse } from './wikiRandomPagesGenerator';

export const generator = {
  wikiPageResponse: generateWikiPageResponse,
  wikiRandomPagesResponse: generateWikiRandomPagesResponse
};
