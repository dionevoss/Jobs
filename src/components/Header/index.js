import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import { HeaderStyle } from './styled'

export default () => (
    <HeaderStyle>
        <Link to='/'>
            <img src={logo} alt="logo"/>
        </Link> 
    </HeaderStyle>
)