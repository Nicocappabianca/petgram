import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
    return(
        <ul style={{paddingBottom: '40px'}}>
            {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
        </ul>
    )
}
