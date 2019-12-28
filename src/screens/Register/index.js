import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from "@material-ui/pickers"

import { PaperStyle, TextStyle, ButtonStyle, SpacerStyle } from '../../components/styles'
import { KeyboardDatePickerStyle, TextFieldStyle } from './styled'
import Header from '../../components/Header'

import api from '../../services/api'
import { Link } from '@material-ui/core'


export default () => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [birth, setBirth] = useState(new Date())
    const [email, setEmail] = useState('')

    const [isNameValidate, setIsNameValidate] = useState(false)
    const [isJobValidate, setIsJobValidate] = useState(false)
    const [isError, setIsError] = useState(true)
    const [isRedirect, setIsRedirect] = useState(false)


    const checkValidation = async (e) => {
        e.preventDefault()
        
        if(name.length < 3) {
            setIsNameValidate(true)
            setIsError(true)
        }else{
            setIsNameValidate(false)
            setIsError(false)
        }

        if(job.length < 3) {
            setIsJobValidate(true)
            setIsError(true)
        }else{
            setIsJobValidate(false)
            setIsError(false)
        }
    }

    const handleCreateUser = async () => {
        await api.post('/users', {name, job, birthday: birth, email})
            .then(() => setIsRedirect(true))
            alert('Registrado!')
    }

    if (isRedirect)
        return <Redirect to="/" />

    if(!isError)
        handleCreateUser()

    return (
        <Fragment>
            <Header />
            <PaperStyle>
                <div style={{ padding: '3%' }}>
                    <TextStyle>Criar Usuário</TextStyle>
                    <form onSubmit={checkValidation}>
                        {isRedirect ? <Redirect to='/' /> : null}
                        <TextFieldStyle InputLabelProps={{ required: false }}
                            required
                            label="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={isNameValidate}
                            helperText={isNameValidate ? 'Nome deve conter ao menos 3 caracteres' : null}

                        />
                        <SpacerStyle />

                        <TextFieldStyle InputLabelProps={{ required: false }}
                            required
                            label="Vaga" 
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                            error={isJobValidate}
                            helperText={isJobValidate ? 'Vaga deve conter ao menos 3 caracteres' : null}

                        />
                        <SpacerStyle />

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePickerStyle InputLabelProps={{ required: false }}
                                required
                                disableFuture
                                invalidDateMessage="Data invalida"
                                minDateMessage="Data invalida"
                                maxDateMessage="Data invalida"
                                openTo="year"
                                format="dd/MM/yyyy"
                                label="Data de Nascimento"
                                views={["year", "month", "date"]}
                                value={birth}
                                onChange={setBirth}
                            />
                        </ MuiPickersUtilsProvider>
                        <SpacerStyle />

                        <TextFieldStyle InputLabelProps={{ required: false }}
                            required
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            
                        />
                        <SpacerStyle />
                        <SpacerStyle />

                        <Link to='/' >
                            <ButtonStyle style={{ padding: '0 100px 0 100px' }}>
                                Voltar
                            </ButtonStyle>
                        </Link>
                        <SpacerStyle />
                        <ButtonStyle type="submit" style={{ padding: '0 100px 0 100px' }}>
                            Enviar
                        </ButtonStyle>
                    </form>
                </div>
            </PaperStyle>
        </Fragment>
    )
}
