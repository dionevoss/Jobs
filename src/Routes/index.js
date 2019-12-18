import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Register from '../screens/Register'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/register' component={Register} />
        </Switch>
    </BrowserRouter>
)