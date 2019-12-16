import React from 'react'

import { HeaderStyle } from './styled'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

export default () => (
    <HeaderStyle>
        <Link to='/'>
            <img src={logo} alt="logo"/>
        </Link> 
    </HeaderStyle>
)