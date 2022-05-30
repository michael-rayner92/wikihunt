import { rest } from 'msw';
import { globalEnvs } from '@config/globals';
import { generator } from '@utils/test-utils/generators';

export const wikiApiHandlers = [
  rest.get(globalEnvs.wikipediaApiBaseURL, (req, res, ctx) => {
    const actionParam = req.url.searchParams.get('action');

    if (actionParam === 'query') {
      const dummyRandomPages = generator.wikiRandomPagesResponse();
      return res(ctx.json(dummyRandomPages));
    }

    const pageTitleParam = req.url.searchParams.get('page') || '';
    const page = generator.wikiPageResponse(pageTitleParam);
    return res(ctx.json(page));
  })
];
