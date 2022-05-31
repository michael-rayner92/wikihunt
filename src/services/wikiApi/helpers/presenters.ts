import type {
  WikiPageApiResponse,
  WikiPageContent,
  WikiPageLink,
  WikiPageProperties
} from '../types';

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
 * Filter out none article results
 * @param links Wikipedia page links array
 * @returns Filtered list of link objects
 */
export const filterPageLinks = (links: WikiPageLink[]) => {
  if (!links) return [];
  return links.filter(link => {
    if (!link.exists) return false;
    if (link.ns !== 0) return false;
    return true;
  });
};

/**
 * Format Wikipedia API page response to a consistent object
 * @param data Wikipedia API page response object
 * @returns Structured object with page data
 */
export const presentWikiPageData = (data: WikiPageApiResponse['parse']): WikiPageContent => {
  return {
    title: data.title,
    links: filterPageLinks(data.links),
    shortDescription: getWikiShortDescription(data.properties)
  };
};
