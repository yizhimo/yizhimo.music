import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';

import routes from './router';

import { HashRouter } from 'react-router-dom';
import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';
// import HYAppPlayerBar from './pages/player/app-player-bar';

export default memo(function App() {
  return (

      <HashRouter>
        <HYAppHeader />
        {renderRoutes(routes)}
        <HYAppFooter />
        {/* <HYAppPlayerBar/> */}
      </HashRouter>

  )
})

