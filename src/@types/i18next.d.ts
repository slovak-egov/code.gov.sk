// // import the original type declarations
// import 'i18next';
//
// import skNs from './locales/sk/translation.json';
//
// declare module 'i18next' {
//   interface CustomTypeOptions {
//     defaultNS: 'ns1';
//     resources: {
//       translation: typeof skNs;
//     };
//   }
// }

import { resources, defaultNS } from '../i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['sk'];
  }
}
