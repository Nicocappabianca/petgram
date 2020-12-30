import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 10px 5px 10px; 
`

export const Input = styled.input`
  border: 1px solid #ccc; 
  border-radius: 3px; 
  margin-bottom: 8px; 
  padding: 8px 4px; 
  display: block; 
  width: 100%; 

  &:focus { 
    outline: none; 
  }
  
  &[disabled] { 
    opacity: .3; 
  }
`

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px; 
  color: #fff; 
  height: 32px; 
  display: block; 
  width: 100%; 
  text-align: center;
  cursor: pointer; 
  transition: .3s; 

  &:hover { 
    background: #6E00C5; 
  }

  &[disabled] { 
    opacity: .3; 
  }
`

export const Title = styled.h2`
  font-size: 16px; 
  font-weight: 500;
  text-align: center;
  padding: 8px 0;  
`

export const ErrorMsg = styled.span`
  padding-left: 10px; 
  font-size: 12px; 
  color: #FF0000;
`