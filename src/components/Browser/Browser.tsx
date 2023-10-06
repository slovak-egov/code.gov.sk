import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import loadable from '@loadable/component';

import * as AppRoutes from './routes';
import GeneralLoader from '../GeneralLoader/GeneralLoader';

const LoadableHome = loadable(() => import('../../pages/Home/Home'), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />
});

const LoadableStatistics = loadable(() => import('../../pages/Statistics/Statistics'), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />
});

const LoadableInstructions = loadable(() => import('../../pages/Instructions/Instructions'), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />
});

const LoadableError = loadable(() => import('../../pages/Error'), {
  resolveComponent: (components) => components.default,
  fallback: <GeneralLoader />
});

export const Browser = () => {
  return (
    <Router>
      <Routes>
        {/*<Route path="/" element={<Navigate to={AppRoutes.dashboard({})} />} />*/}

        <Route path={AppRoutes.home(undefined)} element={<LoadableHome />} />
        <Route path={AppRoutes.statistics(undefined)} element={<LoadableStatistics />} />
        <Route path={AppRoutes.instructions(undefined)} element={<LoadableInstructions />} />

        <Route element={<LoadableError />} />
      </Routes>
    </Router>
  );
};

export default Browser;
