export interface WikiRandomPagesListItem {
  id: number;
  ns: number;
  title: string;
}

export interface WikiRandomPagesApiResponse {
  batch: string;
  continue: {
    continue: string;
    rncontinue: string;
  };
  query: {
    random: WikiRandomPagesListItem[];
  };
}
