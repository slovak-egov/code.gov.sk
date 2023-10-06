// export type CodeResponse = {
//   _id: string;
//   'URI repozitára': string;
//   'Názov repozitára': string;
//   Popis: string;
//   'súvisiace ISVS': string;
//   'názov súvisiaceho ISVS': string;
//   'URI Poskytovateľa': string;
//   'Názov poskytovateľa': string;
//   'Názov licencie': string;
//   'URL na licenciu': string;
// };

export type Modify<T, R> = Omit<T, keyof R> & R;

export enum CODE_FIELDS {
  REPOSITORY_URI = 'URI repozitára',
  REPOSITORY_NAME = 'Názov repozitára',
  DESCRIPTION = 'Popis',
  RELATED_ISVS = 'súvisiace ISVS',
  RELATED_ISVS_NAME = 'názov súvisiaceho ISVS',
  PROVIDER_URI = 'URI Poskytovateľa',
  PROVIDER_NAME = 'Názov poskytovateľa',
  LICENSE_NAME = 'Názov licencie',
  LICENSE_URL = 'URL na licenciu'
}

export enum SORT_FIELDS {
  REPOSITORY_NAME = 'repositoryName',
  RELEVANCE = 'relevance'
}

export type RequestQuery = {
  limit: number;
  offset: number;
  search?: string | null;
  sort?: {
    value: SORT_FIELDS;
    order: 'asc' | 'desc';
  };
  filters: {
    name: CODE_FIELDS;
    value: string;
  }[];
  // filters: {
  //   [key: string]: string;
  // }[];
};

export type CodeResponse = {
  help: string;
  success: boolean;
  result: {
    resource_id: string;
    fields: Array<{
      type: string;
      id: string;
    }>;
    records: Array<{
      _id: number;
      'URI Poskytovateľa': string;
      'súvisiace ISVS': string;
      'URL na licenciu': string;
      'Názov licencie': string;
      'URI repozitára': string;
      'Názov poskytovateľa': string;
      Popis: string;
      'názov súvisiaceho ISVS': string;
      'Názov repozitára': string;
    }>;
    _links: {
      start: string;
      next: string;
    };
    total: number;
    limit?: number;
  };
};

export type SearchResultType = {
  _id: number;
  repositoryURI: string;
  repositoryName: string;
  description: string;
  relatedISVS: string;
  relatedISVSName: string;
  providerURI: string;
  providerName: string;
  licenseName: string;
  licenseURL: string;
};

export type AutocompleteType = {
  id: string;
  name: string;
  count: number;
};

export type Dataset = {
  results: SearchResultType[];
  total: number;
};

export type FiltersData = {
  publisherData: AutocompleteType[];
  licenseData: AutocompleteType[];
};
