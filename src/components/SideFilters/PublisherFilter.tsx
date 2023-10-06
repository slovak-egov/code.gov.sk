import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import { CODE_FIELDS, RequestQuery } from "../../lib/api/types";
import { useParamsContext } from "../../context/paramsContext";
import { useGetFilters } from "../../hooks/useGetFilters";

interface ISideFilterProps {}

const PublisherFilter: React.FC<ISideFilterProps> = () => {
  const { t } = useTranslation();
  const { params, setParams } = useParamsContext();
  const [publisherFilter, setPublisherFilter] = useState<string | null>(null);

  const allFilters = useGetFilters({} as RequestQuery);
  const filters = useGetFilters(params);

  console.log("allFilters: ", allFilters.data);
  console.log("filters: ", filters.data);

  return (
    <div data-module="idsk-search-results-filter">
      <div className="idsk-search-results__filter idsk-search-results-filter__filter-panel">
        <div className="idsk-search-results__link-panel idsk-search-results__content-type-filter">
          <button className="idsk-search-results__link-panel-button ">
            <span className="idsk-search-results__link-panel__title">
              {t("home.other.provider")}
            </span>
            <span className="idsk-search-results__link-panel--span" />
          </button>
          <div className="idsk-search-results__list idsk-search-results--hidden">
            <input
              className="govuk-input idsk-search-results__search__input"
              type="text"
              title={`Filter ${t("home.other.provider")}`}
              name="idsk-search-input__content-type"
              id="filterProvider"
              onChange={(e) => {
                setPublisherFilter(e.target.value);
              }}
            />
            <div className="idsk-option-select-filter">
              <div className="idsk-customer-surveys-radios">
                <div className="govuk-radios">
                  {filters.data?.publisherData &&
                    filters.data.publisherData.length > 0 &&
                    filters.data.publisherData
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .normalize("NFD")
                          .replace(/[\u0300-\u036f]/g, "")
                          .includes(publisherFilter || ""),
                      )
                      ?.map((item) => {
                        return (
                          <div
                            className="govuk-radios__item"
                            key={`:r${_.uniqueId()}:`}
                          >
                            <input
                              className="govuk-radios__input"
                              id={item.id}
                              type="radio"
                              defaultValue={item.name}
                              checked={
                                params.filters.filter(
                                  (filter) => filter.value === item.name,
                                ).length > 0
                              }
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setParams({
                                    ...params,
                                    filters: [
                                      // ...params.filters,
                                      {
                                        name: CODE_FIELDS.PROVIDER_NAME,
                                        value: item.name,
                                      },
                                    ],
                                  });
                                } else {
                                  const newFilters = params.filters.filter(
                                    (filter) => filter.value !== e.target.value,
                                  );
                                  console.log("test3.newFilters: ", newFilters);
                                  setParams({
                                    ...params,
                                    filters: [...newFilters],
                                  });
                                }
                              }}
                              // checked={params.filters?.[CODE_FIELDS.PROVIDER_NAME] === item.name}
                              // onChange={(e) => {
                              //   if (e.target.checked) {
                              //     // @ts-ignore
                              //     setParams({
                              //       ...params,
                              //       filters: {
                              //         ...params.filters,
                              //         [CODE_FIELDS.PROVIDER_NAME]: item.name
                              //       }
                              //     });
                              //   } else if (params.search) {
                              //     const newFilters = { ...params.filters };
                              //     delete newFilters?.[CODE_FIELDS.PROVIDER_NAME];
                              //     setParams({
                              //       ...params,
                              //       filters: {
                              //         ...newFilters
                              //       }
                              //     });
                              //   }
                              // }}
                            />
                            <label
                              className="govuk-label govuk-radios__label"
                              htmlFor={item.id}
                            >
                              {`${item.name} (${item.count})`}
                            </label>
                          </div>
                        );
                      })}
                </div>
              </div>

              {/*<div className="govuk-form-group">*/}
              {/*  <div className="govuk-checkboxes govuk-checkboxes--small">*/}
              {/*    {filters.data?.publisherData &&*/}
              {/*      filters.data.publisherData.length > 0 &&*/}
              {/*      filters.data.publisherData*/}
              {/*        .filter((item) =>*/}
              {/*          item.name*/}
              {/*            .toLowerCase()*/}
              {/*            .normalize('NFD')*/}
              {/*            .replace(/[\u0300-\u036f]/g, '')*/}
              {/*            .includes(publisherFilter || '')*/}
              {/*        )*/}
              {/*        ?.map((item) => {*/}
              {/*          return (*/}
              {/*            <div className="govuk-checkboxes__item" key={`:r${_.uniqueId()}:`}>*/}
              {/*              <input*/}
              {/*                className="govuk-checkboxes__input"*/}
              {/*                id={item.id}*/}
              {/*                type="checkbox"*/}
              {/*                defaultValue={item.name}*/}
              {/*                checked={params.filters.filter((filter) => filter.value === item.name).length > 0}*/}
              {/*                onChange={(e) => {*/}
              {/*                  if (e.target.checked) {*/}
              {/*                    setParams({*/}
              {/*                      ...params,*/}
              {/*                      filters: [*/}
              {/*                        // ...params.filters,*/}
              {/*                        {*/}
              {/*                          name: CODE_FIELDS.PROVIDER_NAME,*/}
              {/*                          value: item.name*/}
              {/*                        }*/}
              {/*                      ]*/}
              {/*                    });*/}
              {/*                  } else {*/}
              {/*                    const newFilters = params.filters.filter((filter) => filter.value !== e.target.value);*/}
              {/*                    console.log('test3.newFilters: ', newFilters);*/}
              {/*                    setParams({*/}
              {/*                      ...params,*/}
              {/*                      filters: [...newFilters]*/}
              {/*                    });*/}
              {/*                  }*/}
              {/*                }}*/}
              {/*                // checked={params.filters?.[CODE_FIELDS.PROVIDER_NAME] === item.name}*/}
              {/*                // onChange={(e) => {*/}
              {/*                //   if (e.target.checked) {*/}
              {/*                //     // @ts-ignore*/}
              {/*                //     setParams({*/}
              {/*                //       ...params,*/}
              {/*                //       filters: {*/}
              {/*                //         ...params.filters,*/}
              {/*                //         [CODE_FIELDS.PROVIDER_NAME]: item.name*/}
              {/*                //       }*/}
              {/*                //     });*/}
              {/*                //   } else if (params.search) {*/}
              {/*                //     const newFilters = { ...params.filters };*/}
              {/*                //     delete newFilters?.[CODE_FIELDS.PROVIDER_NAME];*/}
              {/*                //     setParams({*/}
              {/*                //       ...params,*/}
              {/*                //       filters: {*/}
              {/*                //         ...newFilters*/}
              {/*                //       }*/}
              {/*                //     });*/}
              {/*                //   }*/}
              {/*                // }}*/}
              {/*              />*/}
              {/*              <label className="govuk-label govuk-checkboxes__label" htmlFor={item.id}>*/}
              {/*                {`${item.name} (${item.count})`}*/}
              {/*              </label>*/}
              {/*            </div>*/}
              {/*          );*/}
              {/*        })}*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default PublisherFilter;
export default React.memo(PublisherFilter);
