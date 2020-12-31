import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, ErrorMsg } from './styles'
import { SubmitButton } from '../SubmitButton'
import { MdPets } from 'react-icons/md'

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
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <ErrorMsg><MdPets />&nbsp;{error}</ErrorMsg>}
    </>
  )
}