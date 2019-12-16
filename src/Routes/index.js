import React from 'react'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import UpdateUser from '../pages/UpdateUser'
import CreateUser from '../pages/CreateUser'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/update' component={UpdateUser} />
            <Route exact path='/create' component={CreateUser} />
        </Switch>
    </BrowserRouter>
)