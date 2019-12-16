import React, { Fragment, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Moment from 'react-moment'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ContainerStyle, TableCellStyle, TableRowStyle } from './styled'
import { ButtonStyle, PaperStyle } from '../../assets/stlyes'

import api from '../../services/api'
import { TableCell } from '@material-ui/core'

export default () => {

    const [users, setUsers] = useState([''])
    const [userId, setUserId] = useState()

    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        const fetchUsers = async () => {
            await api.get('/users')
                .then((response) => setUsers(response.data))
        }
        fetchUsers()
    }, [])

    const profile = (id) => {
        setUserId(id)
        setRedirect(true)
    }
    if(redirect)
        return <Redirect to={`/profile/${userId}`} />

    return (
        <Fragment>
            <ContainerStyle>
                <h1>Usuários</h1>
                    <Link to='/create'>
                        <ButtonStyle>Criar</ButtonStyle>
                    </Link>
            </ContainerStyle>
            <div>
                <PaperStyle>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCellStyle>ID</TableCellStyle>
                                <TableCellStyle>Nome</TableCellStyle>
                                <TableCellStyle>Vaga</TableCellStyle>
                                <TableCellStyle>Data de Nascimento</TableCellStyle>
                                <TableCellStyle>Email</TableCellStyle>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map(user => (
                                <TableRowStyle onClick={() => profile(user.id)} key={user.id + 1} hover>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.job}</TableCell>
                                    <TableCell><Moment format='DD/MM/YYYY'>{user.birthday}</Moment></TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRowStyle>
                            ))}
                        </TableBody>
                    </Table>
                </PaperStyle>
            </div>
        </Fragment>
    )
}