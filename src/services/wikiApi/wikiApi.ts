import { baseWikiApi, presentWikiPageData, wikiApiErrorHandler } from './helpers';
import type {
  WikiPageApiResponse,
  WikiPageContent,
  WikiRandomPagesApiResponse,
  WikiRandomPagesListItem
} from './types';

/**
 * Wikipedia API Service Layer
 */
class WikiApi {
  /**
   * GET query with prepopulated params to return five random pages
   * @async
   * @throws WikiApiError Object
   * @returns An array of random article titles and ids
   */
  async getRandomPages(): Promise<WikiRandomPagesListItem[]> {
    try {
      const response = await baseWikiApi.get<WikiRandomPagesApiResponse>('', {
        params: {
          action: 'query',
          list: 'random',
          rnlimit: 5,
          rnnamespace: 0
        }
      });

      return response.data.query.random;
    } catch (err) {
      throw wikiApiErrorHandler(err);
    }
  }

  /**
   * GET request to retrieve basic page information and page links
   * @param title Title of the target page
   * @throws WikiApiError Object
   * @returns Basic page information and a list of links from the page
   */
  async getPage(title: string): Promise<WikiPageContent> {
    try {
      const response = await baseWikiApi.get<WikiPageApiResponse>('', {
        params: {
          action: 'parse',
          formatversion: '2',
          page: title,
          prop: 'links|properties'
        }
      });

      return presentWikiPageData(response.data.parse);
    } catch (err) {
      throw wikiApiErrorHandler(err);
    }
  }
}

export const wikiApi = new WikiApi();
