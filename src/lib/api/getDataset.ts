// https://data.gov.sk/dataset/a1bcfd42-17dc-4b1b-a687-7eacbff0c27b/resource/4fe42769-dbed-4ca9-bb0f-6b9b6715db40/download/otvorenezdrojovekodyisvs20221205.csv
import axios from "axios";
import _ from "lodash";

import {
  AutocompleteType,
  CODE_FIELDS,
  Dataset,
  CodeResponse,
  FiltersData,
  RequestQuery,
  SearchResultType,
  SORT_FIELDS,
} from "./types";

export const getDataset = async ({
  limit,
  offset,
  search,
  sort,
  filters,
}: RequestQuery): Promise<Dataset> => {
  try {
    // const data: { resource_id: string; q?: string } & Omit<RequestQuery, 'sort'> & { sort: string } = {
    //   resource_id: '4fe42769-dbed-4ca9-bb0f-6b9b6715db40',
    //   limit: limit || 5,
    //   offset: offset || 0
    // };

    const data: {
      resource_id: string;
      q?: string;
      sort: string | null;
      language: "sk" | null;
      filters?: {
        [key: string]: string | string[];
      } | null;
    } & Omit<RequestQuery, "sort" | "filters"> = {
      filters: null,
      language: null,
      sort: null,
      resource_id: "4fe42769-dbed-4ca9-bb0f-6b9b6715db40",
      limit: limit || 5,
      offset: offset || 0,
    };

    if (filters.length > 0) {
      data.filters = filters.reduce(
        (acc, item) => {
          return {
            ...acc,
            [item.name]: item.value,
          };
        },
        {} as {
          [key: string]: string;
        },
      );
      // data.filters = {
      //   [filters[0].name]: filters[0].value
      // };
      // if (filters.length === 1) {
      //   data.language = 'sk';
      //   data.filters = {
      //     [filters[0].name]: filters[0].value
      //   };
      // } else {
      //   data.filters = filters.reduce(
      //     (acc, item) => {
      //       return {
      //         ...acc,
      //         [item.name]: acc[item.name] ? [...acc[item.name], item.value] : [item.value]
      //       };
      //     },
      //     {} as {
      //       [key: string]: string[];
      //     }
      //   );
      // }
    }

    if (search) {
      data.q = search;
    }

    if (sort) {
      data.language = "sk";
      // data.sort = `${sort.value} ${sort.order}`;
      switch (sort.value) {
        case SORT_FIELDS.REPOSITORY_NAME:
          data.sort = `'${CODE_FIELDS.PROVIDER_NAME}' ${sort.order}`;
          break;
      }
    }

    const response = await axios.post<CodeResponse>(
      "https://data.gov.sk/api/action/datastore_search",
      _.omitBy(data, _.isNil),
    );

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const responseData = response.data;

    const mappedData: SearchResultType[] = responseData.result.records
      .map((item) => ({
        _id: item._id,
        repositoryURI: item[CODE_FIELDS.REPOSITORY_URI],
        repositoryName: _.upperFirst(item[CODE_FIELDS.REPOSITORY_NAME]),
        description: item[CODE_FIELDS.DESCRIPTION],
        relatedISVS: item[CODE_FIELDS.RELATED_ISVS],
        relatedISVSName: item[CODE_FIELDS.RELATED_ISVS_NAME],
        providerURI: item[CODE_FIELDS.PROVIDER_URI],
        providerName: item[CODE_FIELDS.PROVIDER_NAME],
        licenseName: item[CODE_FIELDS.LICENSE_NAME],
        licenseURL: item[CODE_FIELDS.LICENSE_URL],
      }))
      .filter((item) => item._id);

    return {
      results: mappedData,
      total: responseData.result.total,
    };
  } catch (error: any) {
    return error;
  }
};

export const getFilters = async ({
  limit,
  offset,
  search,
  filters,
}: RequestQuery): Promise<FiltersData> => {
  try {
    const data: {
      resource_id: string;
      q?: string;
    } & Partial<Omit<RequestQuery, "sort" | "filters">> = {
      resource_id: "4fe42769-dbed-4ca9-bb0f-6b9b6715db40",
    };

    // if (filters.length > 0) {
    //   filters.map((item) => {
    //     data.filters = {
    //       ...data.filters,
    //       [item.name]: item.value
    //     };
    //   });
    // }

    if (search) {
      data.q = search;
    }

    const response = await axios.post<CodeResponse>(
      "https://data.gov.sk/api/action/datastore_search",
      data,
    );

    const responseData = response.data.result.records.filter(
      (item) => item[CODE_FIELDS.PROVIDER_NAME] !== "",
    );

    const publisherData: AutocompleteType[] = _.uniqBy(
      responseData,
      CODE_FIELDS.PROVIDER_NAME,
    ).map((item) => ({
      id: _.lowerCase(item[CODE_FIELDS.PROVIDER_NAME]),
      name: item[CODE_FIELDS.PROVIDER_NAME],
      count: _.groupBy(responseData, CODE_FIELDS.PROVIDER_NAME)[
        item[CODE_FIELDS.PROVIDER_NAME]
      ].length,
    }));

    const licenseData: AutocompleteType[] = _.uniqBy(
      responseData,
      CODE_FIELDS.LICENSE_NAME,
    ).map((item) => ({
      id: _.lowerCase(item[CODE_FIELDS.LICENSE_NAME]),
      name: item[CODE_FIELDS.LICENSE_NAME],
      count: _.groupBy(responseData, CODE_FIELDS.LICENSE_NAME)[
        item[CODE_FIELDS.LICENSE_NAME]
      ].length,
    }));

    return {
      publisherData,
      licenseData,
    };
  } catch (error: any) {
    return error;
  }
};
