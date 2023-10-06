import { createUrl } from '../../lib/helpers/routes';

export const home = (params: {} | undefined) => {
  return createUrl('/', params);
};

export const statistics = (params: {} | undefined) => {
  return createUrl('/statistics', params);
};

export const instructions = (params: {} | undefined) => {
  return createUrl('/instructions', params);
};

export const errorPage = (params: {} | undefined) => {
  return createUrl('/404', params);
};
