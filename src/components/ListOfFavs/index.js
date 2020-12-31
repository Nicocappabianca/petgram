import React from 'react'
import { Grid, Image, Link, Title } from './styles'

export const ListOfFavs = ({ favs = [] }) => { 
  return(
    <>
      <Title>Mis Favoritos</Title>
      <Grid>
        {
          favs.map( fav => 
            <Link key={fav.id} to={`/detail/${fav.id}`}>
              <Image src={fav.src} /> 
            </Link>
          )
        }
      </Grid>
    </>
  ) 
} 