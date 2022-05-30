export interface WikiPageLink {
  ns: number;
  title: string;
  exists: boolean;
}

export interface WikiPageProperties {
  'wikibase-shortdesc'?: string;
  defaultsort?: string;
  wikibase_item: string;
}

export interface WikiPageApiResponse {
  parse: {
    title: string;
    pageid: number;
    properties: WikiPageProperties;
    links: WikiPageLink[];
  };
}

export interface WikiPageContent {
  title: string;
  links: WikiPageLink[];
  shortDescription?: string;
}
