import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'
import { Loading } from '../components/Loading'
import styled from 'styled-components'

const GET_FAVS = gql`
  query getFavs { 
    favs { 
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => { 
  
  const Container = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center; 
  `

  if(loading) return <Container><Loading type="balls" color="#29d678"/></Container>
  if(error) return <Container><p>¡Error!</p></Container>
  
  const { favs } = data 

  return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query> 
)