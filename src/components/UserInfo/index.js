import React, { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

import { SubjectStyle } from './styled'
import { PaperStyle, ButtonStyle, TextStyle, SpacerStyle } from '../../assets/stlyes'

import api from '../../services/api'

export default () => {
    const { id } = useParams()
    const [profile, setProfile] = useState('')
    
   useEffect(() => {
        const fetchProfile = async () => {
            await api.get(`/users/${id}`)
                .then((response) => setProfile(response.data))
                .catch((error) => console.log(error))
        }
        fetchProfile()
    }, [id])

    return (
        <Fragment>
            <PaperStyle>
                <div style={{ padding: '3%'}}>
                    <TextStyle>{profile.name}</TextStyle>

                    <SubjectStyle>Vaga: </SubjectStyle>{profile.job}
                    <SpacerStyle />
                    <SubjectStyle>Data de Nascimento: </SubjectStyle> 
                    <Moment format='DD/MM/YYYY'>
                        {profile.birthday}
                    </Moment>
                    <SpacerStyle />
                    <SubjectStyle>Email: </SubjectStyle>{profile.email}
                    <SpacerStyle />
                        <Link to='/'>
                            <ButtonStyle>Voltar</ButtonStyle>
                        </Link>
                </div>
            </PaperStyle>
        </Fragment>
    )
}