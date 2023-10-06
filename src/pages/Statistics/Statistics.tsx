import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppLayout } from '../../components/Browser/AppLayout';
import QualityTable from '../../components/QualityTable/QualityTable';
import { RequestQuery } from '../../lib/api/types';
import Loading from '../../components/IdSk/Loading';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { homeUrl } from '../../components/Browser/routeHelpers';
import { useGetFilters } from '../../hooks/useGetFilters';
import { useGetDataset } from '../../hooks/useGetDataset';

const Statistics = () => {
  const { t } = useTranslation();

  const filters = useGetFilters({} as RequestQuery);
  const dataset = useGetDataset({} as RequestQuery);

  return (
    <AppLayout title={t('statistics.title')}>
      <div className="govuk-width-container">
        <Breadcrumbs
          items={[
            { title: t('common.breadcrumbs.home'), link: homeUrl() },
            { title: t('common.breadcrumbs.statistics') }
          ]}
        />

        <main className="govuk-main-wrapper govuk-main-wrapper--auto-spacing">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-xl">{t('statistics.title')}</h2>

              {filters.data &&
                dataset.data &&
                filters.data?.licenseData?.length > 0 &&
                dataset.data?.results?.length > 0 && (
                  <QualityTable
                    headerTitle={t('statistics.dataset.0.title')}
                    headerCells={t('statistics.dataset.0.columns', { returnObjects: true })}
                    rows={filters.data.licenseData
                      .map((publisher) => ({
                        name: publisher.name,
                        values: [publisher.count]
                      }))
                      .concat([
                        {
                          name: 'Neuvedená',
                          values: [
                            dataset.data?.total - filters.data?.licenseData.reduce((acc, curr) => acc + curr.count, 0)
                          ]
                        }
                      ])}
                  />
                )}

              <div className={'govuk-!-padding-top-5'} />

              {filters.isLoading || (dataset.isLoading && <Loading />)}

              {filters.data &&
                dataset.data &&
                filters.data?.licenseData?.length > 0 &&
                dataset.data?.results?.length > 0 && (
                  <QualityTable
                    headerTitle={t('statistics.dataset.1.title')}
                    headerCells={t('statistics.dataset.1.columns', { returnObjects: true })}
                    rows={filters.data?.publisherData.map((publisher) => ({
                      name: publisher.name,
                      values: [publisher.count]
                    }))}
                  />
                )}
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
};

export default Statistics;
