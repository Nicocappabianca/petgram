import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item, LoaderContainer } from './styles'
import { Loading } from '../Loading'

/* Custom hook */
function useCategoriesData() {
    const [categories, setCategories] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(function(){
        setLoading(true)
        fetch('https://petgram-api-nico.vercel.app/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
                setLoading(false)
            })
    }, [])

    return { categories, loading }
}

export const ListOfCategories = () => {
    const { categories, loading } = useCategoriesData()
    const [ShowFixed, setShowFixed] = useState(false)

    useEffect(function(){
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            ShowFixed != newShowFixed && setShowFixed(newShowFixed)
        }   

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [ShowFixed])
    
    const renderList = (fixed) => (
        <List fixed={fixed}>
            {
                categories.map(category =>
                    <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>
                )
            }
        </List>
    )

    if(loading){
        return(
            <LoaderContainer> 
                <Loading type="balls" color="#29d678"/>
            </LoaderContainer>
        )
    }

    return(
        <>
            { renderList() }
            {/* Only render fixed list when ShowFixed is true */}
            { ShowFixed && renderList(true) }
        </>
    )
}