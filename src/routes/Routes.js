import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'

import Header from '../components/header/Header'

import Home from '../pages/home/Home'
import Details from '../pages/details/Details'

const Routes = () => (
  <>
    <Header />
    <main>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </HashRouter>
    </main>
  </>
)

export default Routes