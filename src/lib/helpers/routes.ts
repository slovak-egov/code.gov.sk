export interface RouteParams {
  [key: string]: string | undefined;
}

export const createUrl = (route: string, params: { [key: string]: string | undefined } | undefined) => {
  if (params) {
    Object.keys(params).forEach((key) => {
      const value = params[key];
      route = route.replace(`:${key}`, value || '');
    });
    return route;
  } else {
    return route;
  }
};
