import React from 'react'
import styled from 'styled-components'

export const NotFound = () => {
  const Title = styled.h1`
    color: #444; 
    font-size: 20px; 
    text-align: center; 
    padding-top: 40px; 

    span { 
      display: block; 
      margin-top: 10px;
      font-size: 24px; 
    }
  `

  return(
    <Title>¡Esta página no existe! <span>😰</span></Title>
  )  
}