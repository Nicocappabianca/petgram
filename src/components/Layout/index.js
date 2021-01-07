import React from 'react'
import { Helmet } from 'react-helmet'

export const Layout = ({ children, title, description }) => { 

  return(
    <>
      <Helmet>
        { title && <title>Petgram | {title}</title> }
        { description && <meta name="description" content={description} /> }
        <link rel="icon" href="../assets/icon.png"/>
      </Helmet>
      <div>
        {children}
      </div>
    </>
  )
}