import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

export const Home = ({ categoryId }) => { 
  return (
    <Layout title="Home" description="Encontrá fotos de animales en Petgram!">
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}