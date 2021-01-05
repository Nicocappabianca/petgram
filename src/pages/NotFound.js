import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/Layout'

export default () => {
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
    <Layout title="Error 404" description="La página que buscas no existe">
      <Title>¡Esta página no existe! <span>😰</span></Title>
    </Layout>
  )  
}