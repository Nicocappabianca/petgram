import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import styled from 'styled-components'
import { Layout } from '../components/Layout'

export default () => {
  const Title = styled.h1`
    font-size: 20px; 
    color: #444;
    text-align: center;  
  `

  return (
    <Layout title="Mis favoritos" description="Aquí están tus fotos favoritas">
      <Title>Mis favoritos</Title>
      <FavsWithQuery />
    </Layout>
  )
}
