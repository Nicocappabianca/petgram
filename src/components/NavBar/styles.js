import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  align-items: center; 
  background: #fcfcfc; 
  border-top: 1px solid #e0e0e0; 
  display: flex; 
  height: 50px; 
  justify-content: space-around; 
  position: fixed; 
  left: 0;
  right: 0;  
  bottom: 0; 
  margin: 0 auto; 
  max-width: 500px; 
  width: 100%; 
  z-index: 1; 
`

export const Link = styled(LinkRouter)`
  align-items: center; 
  color: #888; 
  display: inline-flex; 
  height: 100%; 
  width: 100%; 
  justify-content: center; 
  text-decoration: none; 

  &[aria-current] { 
    color: #000; 

    &:after { 
      ${ fadeIn({ time: '0.3s'}) }; 
      content: '·'; 
      position: absolute; 
      bottom: 0px; 
      font-size: 34px; 
      line-height: 20px; 
    }
  }
`