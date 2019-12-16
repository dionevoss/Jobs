import React, { Fragment, useState } from 'react'

import { TextFieldStyle } from './styled'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'

import { PaperStyle, TextStyle, ButtonStyle, SpacerStyle } from '../../assets/stlyes'

import api from '../../services/api'
import { Redirect } from 'react-router'

export default () => {

    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [birth, setBirth] = useState(new Date())
    const [email, setEmail] = useState('')

    const [nameValidation, setNameValidation] = useState(false)
    const [jobValidation, setJobValidation] = useState(false)
    const [errors, setErrors] = useState(true)

    const [redirect, setRedirect] = useState(false)


    const validate = async (e) => {
        e.preventDefault()
        
        if(name.length < 3) {
            setNameValidation(true)
            setErrors(true)
        }else{
            setNameValidation(false)
            setErrors(false)
        }

        if(job.length < 3) {
            setJobValidation(true)
            setErrors(true)
        }else{
            setJobValidation(false)
            setErrors(false)
        }
    }

    const handleCreate = async () => {
        await api.post('/users', {name, job, birthday: birth, email})
            .then(() => setRedirect(true))
            alert('Registrado!')
    }

    if (redirect)
        return <Redirect to="/" />

    if(!errors)
        handleCreate()

    return (
        <Fragment>
            <PaperStyle>
                <div style={{ padding: '3%'}}>
                    <TextStyle>Criar Usuário</TextStyle>
                    <form onSubmit={validate}>
                        {redirect ? <Redirect to='/' /> : null}
                        <TextFieldStyle InputLabelProps={{ required: false }}
                            required
                            label="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={nameValidation}
                            helperText={nameValidation ? 'Nome deve conter ao menos 3 caracteres' : null}

                        />
                        <SpacerStyle />

                        <TextFieldStyle InputLabelProps={{ required: false }}
                            required
                            label="Vaga" 
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                            error={jobValidation}
                            helperText={jobValidation ? 'Vaga deve conter ao menos 3 caracteres' : null}

                        />
                        <SpacerStyle />

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker InputLabelProps={{ required: false }}
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

                        <ButtonStyle type="submit" style={{ padding: '0 100px 0 100px' }}>
                            Enviar
                        </ButtonStyle>
                    </form>
                </div>
            </PaperStyle>
        </Fragment>
    )
}
