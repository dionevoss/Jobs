import styled from 'styled-components'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

export const TableCellStyle = styled(TableCell)`
    && {
        {
            font-family: Roboto
            font-style: normal
            font-weight: 500
            font-size: 16px
            line-height: 19px
            color: #7C7C7C
        }
    }
`

export const TableRowStyle = styled(TableRow)`
    && {
        :hover {
            cursor: pointer
        }
    }
`

export const ContainerStyle = styled.div`  
    display: flex
    justify-content: space-between
    margin: 5%
`