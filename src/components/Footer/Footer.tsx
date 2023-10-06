import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import vicepremier from '../../lib/assets/images/vicepremier.svg';

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  const { t } = useTranslation();
  console.log('Footer');

  return (
    <footer data-module="idsk-footer-extended">
      <footer className="idsk-footer-extended  idsk-footer-extended--up-button-enabled ">
        <div className="idsk-footer-extended-main-content">
          <div className="govuk-width-container">
            <div className="govuk-grid-column-full" style={{ padding: '2rem 0' }}>
              <div className="idsk-footer-extended-description-panel">
                <div className="govuk-grid-column-one-third idsk-footer-extended-logo-box">
                  <Link to="/" title="domov">
                    <img className="idsk-footer-extended-logo" src={vicepremier} alt={t('common.footer.image-alt')} />
                  </Link>
                </div>
                <div className="govuk-grid-column-two-thirds idsk-footer-extended-info-links">
                  <p className="idsk-footer-extended-frame" style={{ width: '100%' }}>
                    {t('common.footer.description')}{' '}
                    <Link className="govuk-link" title="Jednotným dizajn manuálom elektronických služieb." to="#">
                      {t('common.footer.links.design-system')}
                    </Link>
                    <br />
                    <Link className="govuk-link" title="Jednotným dizajn manuálom elektronických služieb." to="#">
                      {t('common.footer.links.declaration')}
                    </Link>
                  </p>
                  <ul className="idsk-footer-extended-inline-list">
                    <li className="idsk-footer-extended-inline-list-item">
                      <Link
                        className="govuk-link"
                        title="Cookies"
                        to="https://api.code.gov.sk"
                        style={{ color: '#0065b3' }}
                      >
                        {t('common.footer.links.api')}
                      </Link>
                    </li>
                    <li className="idsk-footer-extended-inline-list-item">
                      <Link
                        className="govuk-link"
                        title="Ochrana osobných údajov"
                        to="https://code.gov.sk"
                        style={{ color: '#0065b3' }}
                      >
                        {t('common.footer.links.open-data-portal')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </footer>
  );

  // return (
  //   <div data-module="idsk-footer-extended">
  //     <footer className="idsk-footer-extended  ">
  //       <div className="idsk-footer-extended-main-content">
  //         <div className="govuk-width-container">
  //           <div className="govuk-grid-column-full">
  //             <div className="idsk-footer-extended-description-panel">
  //               <div className="govuk-grid-column-one-half idsk-footer-extended-logo-box">
  //                 <img
  //                   className="idsk-footer-extended-logo"
  //                   src={vicepremier}
  //                   alt="Úrad podpredsedu vlády SR pre investície a informatizáciu"
  //                 />
  //               </div>
  //               <div className="govuk-grid-column-two-half idsk-footer-extended-logo-box">
  //                 <p style={{ textAlign: 'left' }}>
  //                   <span>
  //                     Prevádzkovateľom služby je Úrad podpredsedu vlády SR pre investície a informatizáciu.
  //                     <br />
  //                     Vytvorené v súlade s{' '}
  //                   </span>
  //                   <a
  //                     href="https://idsk.gov.sk/"
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     title="Jednotným dizajn manuálom elektronických služieb."
  //                   >
  //                     Jednotným dizajn manuálom elektronických služieb
  //                   </a>
  //                   <br />
  //                   <a
  //                     href="https://www.informatizacia.sk/"
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                     title="Vyhlásenie o prístupnosti"
  //                   >
  //                     Vyhlásenie o prístupnosti
  //                   </a>
  //                 </p>
  //               </div>
  //               <div className="govuk-grid-row" style={{ paddingTop: '2rem' }}>
  //                 <div className="govuk-grid-column-one-three">
  //                   <br />
  //                 </div>
  //                 <div className="govuk-grid-column-two-three">
  //                   <div className="idsk-footer-extended-meta-item">
  //                     <ul className="">
  //                       <li className="idsk-footer-extended-inline-list-item" style={{ paddingRight: '1rem' }}>
  //                         <Link to="https://api.code.gov.sk" className="govuk-link" title="Cookies">
  //                           API
  //                         </Link>
  //                       </li>
  //                       <li className="idsk-footer-extended-inline-list-item" style={{ paddingLeft: '1rem' }}>
  //                         <Link to="https://code.gov.sk" className="govuk-link" title="Ochrana osobných údajov">
  //                           Portál s otvorenými údajmi
  //                         </Link>
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </footer>
  //   </div>
  // );
};
