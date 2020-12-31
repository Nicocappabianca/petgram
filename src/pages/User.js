import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import styled from 'styled-components'

export const User = () => {
  const { removeAuth } = useContext(Context)

  const Container = styled.div`
    max-width: 90%; 
    margin: 0 auto; 
  `

  const Title = styled.h1`
    font-size: 20px; 
    color: #444;
    text-align: center;  
    margin-bottom: 60px; 
  `

  return (
    <Container>
      <Title>Perfil de usuario</Title>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Container>
  )
}