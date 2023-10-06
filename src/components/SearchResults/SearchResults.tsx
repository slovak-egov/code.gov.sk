import React, { Fragment, PropsWithChildren, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import IdSkModule from "../IdSk/IdSkModule";
import Loading from "../IdSk/Loading";
import GridColumn from "../Grid/GridColumn";
import { SearchResultType } from "../../lib/api/types";
import GridRow from "../Grid/GridRow";
import { useParamsContext } from "../../context/paramsContext";

interface ISearchResultsProps extends PropsWithChildren {
  // header: string;
  // query: RequestQuery;
  // orderOptions: OrderOption[];
  // filters: string[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
  data: SearchResultType[];
}

const SearchResults: React.FC<ISearchResultsProps> = ({
  loading,
  error,
  totalCount,
  data,
}) => {
  const { params, setParams } = useParamsContext();
  const { t } = useTranslation();
  const [pageSize, setPageSize] = useState(params.limit || 10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPageCount = Math.ceil(totalCount / params.limit);
  // const currentPage = 1;

  const filterOptions = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "50", label: "50" },
  ];

  const handleNext = () => {
    setParams({ ...params, offset: params.offset + params.limit });
    setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    setParams({ ...params, offset: params.offset - params.limit });
    setCurrentPage(currentPage - 1);
  };

  const getCount = (count: number) => {
    if (count === 1) {
      return t("home.results.result-1", { totalCount: count });
    } else if (count > 1 && count < 5) {
      return t("home.results.result-5", { count });
    } else {
      return t("home.results.result-x", { count });
    }
  };

  return (
    <IdSkModule
      moduleType="idsk-search-results"
      className="govuk-grid-column-three-quarters idsk-search-results__content"
    >
      {loading ? (
        <Loading />
      ) : error !== null ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <GridColumn widthUnits={1} totalUnits={3}>
            <span className="idsk-search-results__content__number-of-results">
              {getCount(totalCount)}
            </span>
          </GridColumn>

          <GridColumn
            widthUnits={2}
            totalUnits={4}
            className="idsk-search-results__filter-panel--mobile govuk-clearfix"
          >
            <button
              className="idsk-search-results__filters__button"
              title="Filtre"
            >
              Filtre
            </button>

            <div className="idsk-search-results__per-page">
              <span>{t("home.search.results-per-page")}</span>
              <div className="govuk-form-group">
                <select
                  className="govuk-select"
                  id={"pageSize"}
                  value={pageSize.toString()}
                  onChange={(e) => {
                    setPageSize(parseInt(e.target.value));
                    setParams({ ...params, limit: parseInt(e.target.value) });
                  }}
                >
                  {filterOptions.map((option) => {
                    const v = option.value;
                    return (
                      <option key={v} value={v}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </GridColumn>

          <div className="idsk-search-results__content__picked-filters govuk-grid-column-full idsk-search-results--invisible__mobile"></div>

          <div className="idsk-search-results__content__all">
            <div className="idsk-search-results__card govuk-grid-column-full">
              <div className="idsk-card idsk-card-basic-variant nkod-search-result-card">
                {data.map((item, i) => {
                  return (
                    <Fragment key={item._id}>
                      <GridRow>
                        <GridColumn
                          widthUnits={1}
                          totalUnits={1}
                          className={
                            "govuk-!-padding-top-1 govuk-!-padding-bottom-1"
                          }
                        >
                          <Link
                            to={item.repositoryURI}
                            className="idsk-card-title govuk-link"
                            target={"_blank"}
                            title={item.description}
                          >
                            <strong>{item.repositoryName}</strong>
                          </Link>
                        </GridColumn>
                        <GridColumn widthUnits={1} totalUnits={1}>
                          <span style={{ marginRight: "10px" }}>
                            {item.description}
                          </span>
                        </GridColumn>
                        <GridColumn
                          widthUnits={1}
                          totalUnits={1}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                          className={"govuk-!-padding-top-1"}
                        >
                          <span
                            style={{ marginRight: "10px", textAlign: "start" }}
                          >
                            <strong>{item.licenseName}</strong>
                          </span>
                          <span
                            style={{
                              marginRight: "10px",
                              textAlign: "end",
                              color: "gray",
                            }}
                          >
                            {item.providerName}
                          </span>
                        </GridColumn>
                      </GridRow>
                      {i < data.length - 1 ? (
                        <hr className="idsk-search-results__card__separator" />
                      ) : null}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          {totalPageCount > 0 ? (
            <div className="idsk-search-results__content__page-changer govuk-grid-column-full">
              {currentPage > 1 ? (
                <button
                  type="button"
                  className="idsk-search-results__button--back"
                  onClick={handlePrevious}
                >
                  <svg
                    className="idsk-search-results__button__svg--previous"
                    width="20"
                    height="15"
                    viewBox="0 -2 25 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.2925 13.8005C7.6825 13.4105 7.6825 12.7805 7.2925 12.3905L3.4225 8.50047H18.5925C19.1425 8.50047 19.5925 8.05047 19.5925 7.50047C19.5925 6.95047 19.1425 6.50047 18.5925 6.50047H3.4225L7.3025 2.62047C7.6925 2.23047 7.6925 1.60047 7.3025 1.21047C6.9125 0.820469 6.2825 0.820469 5.8925 1.21047L0.2925 6.80047C-0.0975 7.19047 -0.0975 7.82047 0.2925 8.21047L5.8825 13.8005C6.2725 14.1805 6.9125 14.1805 7.2925 13.8005Z"
                      fill="#0065B3"
                    ></path>
                  </svg>
                  {t("home.results.previous-page")}
                </button>
              ) : null}
              {totalPageCount > currentPage ? (
                <button
                  type="button"
                  className="idsk-search-results__button--forward"
                  onClick={handleNext}
                >
                  {t("home.results.next-page")}
                  <svg
                    className="idsk-search-results__button__svg--next"
                    width="20"
                    height="13"
                    viewBox="-5 0 25 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.5558 0.281376C12.1577 0.666414 12.1577 1.2884 12.5558 1.67344L16.5063 5.51395L1.0208 5.51395C0.45936 5.51395 1.90735e-06 5.95823 1.90735e-06 6.50123C1.90735e-06 7.04424 0.45936 7.48851 1.0208 7.48851L16.5063 7.48851L12.5456 11.3192C12.1475 11.7042 12.1475 12.3262 12.5456 12.7112C12.9437 13.0963 13.5868 13.0963 13.9849 12.7112L19.7014 7.19233C20.0995 6.80729 20.0995 6.1853 19.7014 5.80027L13.9952 0.281376C13.597 -0.0937901 12.9437 -0.0937901 12.5558 0.281376Z"
                      fill="#0065B3"
                    ></path>
                  </svg>
                </button>
              ) : null}

              <div className="idsk-search-results__page-number govuk-grid-column-full">
                <span data-lines="Strana $value1 z $value2">
                  {t("home.results.page", {
                    current: currentPage,
                    total: totalPageCount,
                  })}
                </span>
              </div>
            </div>
          ) : null}
        </>
      )}
    </IdSkModule>
  );
};

export default SearchResults;
