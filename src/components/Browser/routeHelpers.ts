import * as Routes from './routes';

export const homeUrl = () => {
  return Routes.home({});
};

export const statisticsUrl = () => {
  return Routes.statistics({});
};

export const instructionsUrl = () => {
  return Routes.instructions({});
};

export const errorUrl = () => {
  return Routes.errorPage({});
};
