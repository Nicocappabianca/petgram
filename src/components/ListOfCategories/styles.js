import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const List = styled.ul`
    display: flex; 
    overflow: scroll; 
    width: 100%; 
    margin-bottom: 20px; 
    &::-webkit-scrollbar {
        display: none;
    }
    ${props => props.fixed  && css`
        {
            ${ fadeIn({time: '.3s'}) }
            background: #fff; 
            border-radius: 60px; 
            box-shadow: 0 0 20px rgba(0, 0, 0, .3); 
            left: 0; 
            margin: 0 auto; 
            max-width: 400px; 
            padding: 10px; 
            position: fixed; 
            right: 0; 
            top: -10px; 
            transform: scale(.7); 
            z-index: 1; 
        }`
    }
`

export const Item = styled.li`
    padding: 0 8px; 
`
export const LoaderContainer = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    width: 100%; 
`