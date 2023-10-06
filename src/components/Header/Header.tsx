import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { homeUrl, instructionsUrl, statisticsUrl } from '../Browser/routeHelpers';
import IdSkModule from '../IdSk/IdSkModule';

interface IHeaderProps {
  title?: string;
}

const Header: React.FC<IHeaderProps> = ({ title }) => {
  const { t, i18n } = useTranslation();

  // console.log('i18n: ', i18n.language);
  // console.log('i18n: ', i18n.language === 'sk');

  const getLanguage = () => {
    if (i18n.language === 'sk') {
      return 'Slovenčina';
    } else if (i18n.language === 'en') {
      return 'English';
    } else if (i18n.language === 'de') {
      return 'German';
    }
  };

  return (
    <header className="idsk-header-web__scrolling-wrapper">
      <IdSkModule moduleType="idsk-header-web">
        <div className="idsk-header-web__tricolor" />
        <div className="idsk-header-web__brand ">
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <div className="idsk-header-web__brand-gestor" />
                <div className="idsk-header-web__brand-spacer" />
                <div className="idsk-header-web__brand-language">
                  <button
                    className="idsk-header-web__brand-language-button"
                    aria-label={t('common.menu.language.aria-expand')}
                    aria-expanded="false"
                    data-text-for-hide={t('common.menu.language.aria-expand')}
                    data-text-for-show={t('common.menu.language.aria-hide')}
                  >
                    {getLanguage()}
                    <span className="idsk-header-web__link-arrow" />
                  </button>
                  <ul className="idsk-header-web__brand-language-list">
                    <li className="idsk-header-web__brand-language-list-item">
                      <a
                        className={`govuk-link idsk-header-web__brand-language-list-item-link ${
                          i18n.language === 'en' && 'idsk-header-web__brand-language-list-item-link--selected'
                        }`}
                        title="English"
                        href="#2"
                        onClick={() => i18n.changeLanguage('en')}
                      >
                        English
                      </a>
                    </li>
                    <li className="idsk-header-web__brand-language-list-item">
                      <a
                        className={`govuk-link idsk-header-web__brand-language-list-item-link ${
                          i18n.language === 'de' && 'idsk-header-web__brand-language-list-item-link--selected'
                        }`}
                        title="German"
                        href="#3"
                        onClick={() => i18n.changeLanguage('de')}
                      >
                        German
                      </a>
                    </li>
                    <li className="idsk-header-web__brand-language-list-item">
                      <a
                        className={`govuk-link idsk-header-web__brand-language-list-item-link ${
                          i18n.language === 'sk' && 'idsk-header-web__brand-language-list-item-link--selected'
                        }`}
                        title="Slovenčina"
                        href="#1"
                        onClick={() => i18n.changeLanguage('sk')}
                      >
                        Slovenčina
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="idsk-header-web__main">
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full govuk-grid-column-one-third-from-desktop">
                <div className="idsk-header-web__main-headline">
                  <Link to={homeUrl()} title="Odkaz na úvodnú stránku">
                    <h2 className="govuk-heading-m">code.gov.sk</h2>
                  </Link>
                  <button
                    className="idsk-button idsk-header-web__main-headline-menu-button"
                    aria-label="Rozbaliť menu"
                    aria-expanded="false"
                    data-text-for-show="Rozbaliť menu"
                    data-text-for-hide="Zavrieť menu"
                  >
                    Menu
                    <span className="idsk-header-web__menu-open" />
                    <span className="idsk-header-web__menu-close" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="idsk-header-web__nav--divider" />
        <div className="idsk-header-web__nav idsk-header-web__nav--mobile ">
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full"></div>
              <div className="govuk-grid-column-full">
                <nav className="">
                  <ul className="idsk-header-web__nav-list " aria-label="Hlavná navigácia">
                    <li className="idsk-header-web__nav-list-item">
                      <Link
                        className="govuk-link idsk-header-web__nav-list-item-link"
                        to={statisticsUrl()}
                        title={t('common.menu.statistics')}
                      >
                        {t('common.menu.statistics')}
                      </Link>
                    </li>
                    <li className="idsk-header-web__nav-list-item">
                      <Link
                        className="govuk-link idsk-header-web__nav-list-item-link"
                        to={instructionsUrl()}
                        title={t('common.menu.instructions')}
                      >
                        {t('common.menu.instructions')}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </IdSkModule>
    </header>
  );
};

export default Header;
