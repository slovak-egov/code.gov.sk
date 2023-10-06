import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppLayout } from '../../components/Browser/AppLayout';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { homeUrl } from '../../components/Browser/routeHelpers';

const Instructions = () => {
  const { t } = useTranslation();
  return (
    <AppLayout title={t('instructions.title')}>
      <div className="govuk-width-container">
        <Breadcrumbs
          items={[
            { title: t('common.breadcrumbs.home'), link: homeUrl() },
            { title: t('common.breadcrumbs.instructions') }
          ]}
        />
        <main className="govuk-main-wrapper govuk-main-wrapper--auto-spacing">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-xl">{t('instructions.title')}</h2>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
};

export default Instructions;
