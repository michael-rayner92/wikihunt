import type { WikiPageApiResponse, WikiPageContent, WikiPageProperties } from '../types';

/**
 * Extract short description from wiki page properties
 * @param properties Wikipedia API page properties object
 * @returns String with a short description or an empty string
 */
const getWikiShortDescription = (properties: WikiPageProperties): string => {
  if (!properties) return '';
  return properties['wikibase-shortdesc'] ?? properties.defaultsort ?? '';
};

/**
 * Format Wikipedia API page response to a consistent object
 * @param data Wikipedia API page response object
 * @returns Structured object with page data
 */
export const presentWikiPageData = (data: WikiPageApiResponse['parse']): WikiPageContent => {
  return {
    title: data.title,
    links: data.links,
    shortDescription: getWikiShortDescription(data.properties)
  };
};
