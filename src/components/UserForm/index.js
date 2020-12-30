import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title, ErrorMsg } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => { 
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => { 
    event.preventDefault() 
    onSubmit({ 
      email: email.value, 
      password: password.value 
    })
  }

  return(
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        {/* {...email} & {...password} contains value and onChange props */}
        <Input 
          type="text" 
          placeholder="Email" 
          {...email} 
          disabled={disabled} 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          {...password} 
          disabled={disabled} 
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  )
}