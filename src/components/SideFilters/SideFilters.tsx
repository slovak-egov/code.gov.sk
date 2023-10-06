import React from "react";
import { useTranslation } from "react-i18next";

import PublisherFilter from "./PublisherFilter";
import LicenseFilter from "./LicenseFilter";
import { useParamsContext } from "../../context/paramsContext";
import { SORT_FIELDS } from "../../lib/api/types";

interface ISideFilterProps {}

const SideFilters: React.FC<ISideFilterProps> = () => {
  const { params, setParams } = useParamsContext();

  const { t } = useTranslation();
  // const filters = useGetFilters(params);

  // console.log('filterData: ', filters.data);
  console.log("params: ", params);

  return (
    <div className="govuk-grid-column-one-quarter">
      <div className="idsk-search-results--order__dropdown">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor={t("home.sort.label")}>
            {t("home.sort.label")}
          </label>
          <select
            className="govuk-select"
            id={t("home.sort.label")}
            onChange={(e) => {
              setParams({
                ...params,
                sort: {
                  value: e.target.value as SORT_FIELDS,
                  order: "asc",
                },
              });
            }}
          >
            <option value={SORT_FIELDS.RELEVANCE}>
              {t("home.sort.relevance")}
            </option>
            <option value={SORT_FIELDS.REPOSITORY_NAME}>
              {t("home.sort.name")}
            </option>
            {/*<option value="updated">{t('home.sort.updated')}</option>*/}
            {/*<option value="created">{t('home.sort.created')}</option>*/}
          </select>
        </div>
      </div>
      <div className="idsk-search-results-filter">
        <PublisherFilter />
        <LicenseFilter />
      </div>
    </div>
  );
};

// export default SideFilters;
export default React.memo(SideFilters);
