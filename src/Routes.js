import React from 'react';
import { Route } from 'react-router'
import {Home, Host, Player} from 'containers'


const Routes = () => (
  <div className="appContainers">
    <main>
       <Route path="/" component={Player} />
    </main>
  </div>
)

export default Routes;