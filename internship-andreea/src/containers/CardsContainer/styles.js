import styled from 'styled-components'
import { breakpoints } from '../../theme'

export const CardContainer = styled.div`
    
    @media only screen and (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        margin-left:8px
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr 1fr;
        display:grid;
    }
        
    @media only screen and (min-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr 1fr;
        align-self: center;
        
`
