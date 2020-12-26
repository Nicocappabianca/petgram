import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ onSubmit }) => { 
  const email = useInputValue('')
  const password = useInputValue('')

  return(
    <form onSubmit={onSubmit}>
      {/* {...email} contains value and onChange props */}
      <input type="text" placeholder="Email" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <button>Iniciar sesión</button>
    </form>
  )
}