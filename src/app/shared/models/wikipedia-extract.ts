export interface WikipediaExtract {
  query: {
    pages: {
      [key: string]: {
        title: string,
        extract: string,
        thumbnail: {
          source: string
        },
        fullurl: string
      }
    }
  };
}
