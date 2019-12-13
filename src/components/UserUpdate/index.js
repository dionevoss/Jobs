import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { TextFieldStyle } from './styled'

import { PaperStyle, TextStyle, ButtonStyle, SpacerStyle } from '../../assets/stlyes'

export default () => (
    <Fragment>
        <PaperStyle>
            <div style={{ padding: '3%'}}>
                <TextStyle>Atualizar Usuário</TextStyle>

                <TextFieldStyle id="standar-basic" label="Nome" />
                <SpacerStyle />
                <TextFieldStyle id="standar-basic" label="Vaga" />
                <SpacerStyle />
                <TextFieldStyle id="standar-basic" label="Data de Nascimento" />
                <SpacerStyle />
                <TextFieldStyle id="standar-basic" label="Email" />
                <SpacerStyle />

                <ButtonStyle style={{ padding: '0 100px 0 100px' }}>
                    <Link to='/'>Atualizar</Link>
                </ButtonStyle>
            </div>
        </PaperStyle>
    </Fragment>
)