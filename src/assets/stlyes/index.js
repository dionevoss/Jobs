import styled from 'styled-components'
import { 
    Button,
    Paper,

} from '@material-ui/core'

export const ButtonStyle = styled(Button)`
    && {
        background-color: #000
        height: 50px
        color: white
        padding: 0px 55px 0px 55px

        :hover {
            background-color: #7C7C7C
        }
    }
`
export const PaperStyle = styled(Paper)`
    && {
        margin: 5%;
    }
`

export const TextStyle = styled.h1`
    color: #7C7C7C
    font-size: 20px
    padding-bottom: 25px
`

export const SpacerStyle = styled.div`
    padding: 8px
`