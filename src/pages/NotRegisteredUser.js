import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => { 
        return(
          <>
            <RegisterMutation>
              { 
                (register, { data, loading, error }) => { 
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password } 
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg = error && 'Ocurrió un error.'

                  return <UserForm onSubmit={onSubmit} disabled={loading} error={errorMsg} title="Registrarse" />
                }
              }
            </RegisterMutation>
            <UserForm onSubmit={activateAuth} title="Iniciar sesión" />
          </>
        )
      } 
    }
  </Context.Consumer>
)