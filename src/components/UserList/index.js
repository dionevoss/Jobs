import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { TableCellStyle, ContainerStyle } from './styled'
import { ButtonStyle, PaperStyle } from '../../assets/stlyes'

export default () => {
    return (
        <Fragment>
            <ContainerStyle>
                <h1>Usuários</h1>
                <ButtonStyle>
                    <Link to='/update'>Criar</Link>
                </ButtonStyle>
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
                    </Table>
                </PaperStyle>
            </div>
        </Fragment>
    )
}