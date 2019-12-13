import React from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import UpdateUser from '../pages/UpdateUser'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/update' component={UpdateUser} />
        </Switch>
    </BrowserRouter>
)