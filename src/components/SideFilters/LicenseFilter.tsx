import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import _ from "lodash";

import { CODE_FIELDS, RequestQuery } from "../../lib/api/types";
import { useParamsContext } from "../../context/paramsContext";
import { useGetFilters } from "../../hooks/useGetFilters";

interface ILicenseFilterProps {}

const LicenseFilter: React.FC<ILicenseFilterProps> = () => {
  const { params, setParams } = useParamsContext();
  const { t } = useTranslation();
  const [licenseFilter, setLicenseFilter] = useState<string | null>(null);

  const filters = useGetFilters(params);

  return (
    <div data-module="idsk-search-results-filter">
      <div className="idsk-search-results__filter idsk-search-results-filter__filter-panel">
        <div className="idsk-search-results__link-panel idsk-search-results__content-type-filter">
          <button className="idsk-search-results__link-panel-button ">
            <span className="idsk-search-results__link-panel__title">
              {t("home.other.license")}
            </span>
            <span className="idsk-search-results__link-panel--span" />
          </button>
          <div className="idsk-search-results__list idsk-search-results--hidden">
            <input
              className="govuk-input idsk-search-results__search__input"
              type="text"
              title={`Filter ${t("home.other.license")}`}
              name="idsk-search-input__content-type"
              id="licenseFilter"
              onChange={(e) => {
                setLicenseFilter(e.target.value);
              }}
            />
            <div className="idsk-option-select-filter">
              <div className="idsk-customer-surveys-radios">
                <div className="govuk-radios">
                  {filters.data?.licenseData &&
                    filters.data.licenseData.length > 0 &&
                    filters.data.licenseData
                      .filter((item) =>
                        item.name
                          .toLowerCase()
                          .normalize("NFC")
                          .replace(/[\u0300-\u036f]/g, "")
                          .includes(licenseFilter || ""),
                      )
                      ?.map((item) => (
                        <div
                          className="govuk-radios__item"
                          key={`:r${_.uniqueId()}:`}
                        >
                          <input
                            className="govuk-radios__input"
                            id={item.id}
                            name={t("home.other.license")}
                            type="radio"
                            defaultValue={item.name}
                            checked={
                              params.filters.filter(
                                (filter) => filter.value === item.name,
                              ).length > 0
                            }
                            onChange={(e) => {
                              console.log("e.target.value: ", e.target.value);
                              console.log("e.target.name: ", e.target.name);
                              console.log(
                                "e.target.checked: ",
                                e.target.checked,
                              );
                              console.log("params.filters: ", params.filters);
                              if (e.target.checked) {
                                setParams({
                                  ...params,
                                  filters: [
                                    // ...params.filters,
                                    {
                                      name: CODE_FIELDS.LICENSE_NAME,
                                      value: item.name,
                                    },
                                  ],
                                });
                              } else {
                                const newFilters = params.filters.filter(
                                  (filter) => filter.value !== e.target.value,
                                );
                                setParams({
                                  ...params,
                                  filters: [...newFilters],
                                });
                              }
                            }}
                            // checked={params.filters?.[CODE_FIELDS.LICENSE_NAME] === item.name}
                            // onChange={(e) => {
                            //   if (e.target.checked) {
                            //     setParams({
                            //       ...params,
                            //       filters: {
                            //         ...params.filters,
                            //         [CODE_FIELDS.LICENSE_NAME]: item.name
                            //       }
                            //     });
                            //   } else {
                            //     const newFilters = { ...params.filters };
                            //     delete newFilters?.[CODE_FIELDS.LICENSE_NAME];
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
                      ))}
                </div>
              </div>
            </div>
          </div>
          {/*<div className="idsk-search-results__list idsk-search-results--hidden">*/}
          {/*  <input*/}
          {/*    className="govuk-input idsk-search-results__search__input"*/}
          {/*    type="text"*/}
          {/*    title={`Filter ${t('home.other.license')}`}*/}
          {/*    name="idsk-search-input__content-type"*/}
          {/*    id="licenseFilter"*/}
          {/*    onChange={(e) => {*/}
          {/*      setLicenseFilter(e.target.value);*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <div className="idsk-option-select-filter ">*/}
          {/*    <div className="govuk-form-group">*/}
          {/*      <div className="govuk-checkboxes govuk-checkboxes--small">*/}
          {/*        {filters.data?.licenseData &&*/}
          {/*          filters.data.licenseData.length > 0 &&*/}
          {/*          filters.data.licenseData*/}
          {/*            .filter((item) =>*/}
          {/*              item.name*/}
          {/*                .toLowerCase()*/}
          {/*                .normalize('NFC')*/}
          {/*                .replace(/[\u0300-\u036f]/g, '')*/}
          {/*                .includes(licenseFilter || '')*/}
          {/*            )*/}
          {/*            ?.map((item) => (*/}
          {/*              <div className="govuk-checkboxes__item" key={`:r${_.uniqueId()}:`}>*/}
          {/*                <input*/}
          {/*                  className="govuk-checkboxes__input"*/}
          {/*                  id={item.id}*/}
          {/*                  name={t('home.other.license')}*/}
          {/*                  type="checkbox"*/}
          {/*                  defaultValue={item.name}*/}
          {/*                  checked={params.filters.filter((filter) => filter.value === item.name).length > 0}*/}
          {/*                  onChange={(e) => {*/}
          {/*                    console.log('e.target.value: ', e.target.value);*/}
          {/*                    console.log('e.target.name: ', e.target.name);*/}
          {/*                    console.log('e.target.checked: ', e.target.checked);*/}
          {/*                    console.log('params.filters: ', params.filters);*/}
          {/*                    if (e.target.checked) {*/}
          {/*                      setParams({*/}
          {/*                        ...params,*/}
          {/*                        filters: [*/}
          {/*                          // ...params.filters,*/}
          {/*                          {*/}
          {/*                            name: CODE_FIELDS.LICENSE_NAME,*/}
          {/*                            value: item.name*/}
          {/*                          }*/}
          {/*                        ]*/}
          {/*                      });*/}
          {/*                    } else {*/}
          {/*                      const newFilters = params.filters.filter((filter) => filter.value !== e.target.value);*/}
          {/*                      setParams({*/}
          {/*                        ...params,*/}
          {/*                        filters: [...newFilters]*/}
          {/*                      });*/}
          {/*                    }*/}
          {/*                  }}*/}
          {/*                  // checked={params.filters?.[CODE_FIELDS.LICENSE_NAME] === item.name}*/}
          {/*                  // onChange={(e) => {*/}
          {/*                  //   if (e.target.checked) {*/}
          {/*                  //     setParams({*/}
          {/*                  //       ...params,*/}
          {/*                  //       filters: {*/}
          {/*                  //         ...params.filters,*/}
          {/*                  //         [CODE_FIELDS.LICENSE_NAME]: item.name*/}
          {/*                  //       }*/}
          {/*                  //     });*/}
          {/*                  //   } else {*/}
          {/*                  //     const newFilters = { ...params.filters };*/}
          {/*                  //     delete newFilters?.[CODE_FIELDS.LICENSE_NAME];*/}
          {/*                  //     setParams({*/}
          {/*                  //       ...params,*/}
          {/*                  //       filters: {*/}
          {/*                  //         ...newFilters*/}
          {/*                  //       }*/}
          {/*                  //     });*/}
          {/*                  //   }*/}
          {/*                  // }}*/}
          {/*                />*/}
          {/*                <label className="govuk-label govuk-checkboxes__label" htmlFor={item.id}>*/}
          {/*                  {`${item.name} (${item.count})`}*/}
          {/*                </label>*/}
          {/*              </div>*/}
          {/*            ))}*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

// export default LicenseFilter;
export default React.memo(LicenseFilter);
