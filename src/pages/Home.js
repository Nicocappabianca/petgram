import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { Layout } from '../components/Layout'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

const HomePage = ({ categoryId }) => { 
  return (
    <Layout title="Home" description="Encontrá fotos de animales en Petgram!">
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => { 
  return prevProps.categoryId === props.categoryId
})