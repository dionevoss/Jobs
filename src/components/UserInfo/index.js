import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { SubjectStyle } from './styled'
import { PaperStyle, ButtonStyle, TextStyle, SpacerStyle } from '../../assets/stlyes'

export default () => (
    <Fragment>
        <PaperStyle>
            <div style={{ padding: '3%'}}>
                <TextStyle>Dionatan Penning Voss</TextStyle>

                <SubjectStyle>Vaga:</SubjectStyle> Back-End
                <SpacerStyle />
                <SubjectStyle>Data de Nascimento:</SubjectStyle> 30/04/1996
                <SpacerStyle />
                <SubjectStyle>Email:</SubjectStyle> dionevoss@gmail.com
                <SpacerStyle />
                <ButtonStyle>
                    <Link to='/'>Voltar</Link>
                </ButtonStyle>
            </div>
        </PaperStyle>
    </Fragment>
)