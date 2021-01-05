import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { Layout } from '../components/Layout'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export default () => {
  const { activateAuth } = useContext(Context)
  const [register, setRegister] = useState(true)

  const Text = styled.p`
    text-align: center; 
    margin-top: 25px; 
    font-size: 15px; 

    span { 
      color: #8d00ff; 
      cursor: pointer; 
    }
  `

  return(
    <Layout 
      title={ register ? 'Registrarse' : 'Iniciar sesión'} 
      description={`${ register ? 'Registrate' : 'Inicia sesión'} en Petgram!`}
    >
      { register
        ? <RegisterMutation>
            { 
              (register, { data, loading, error }) => { 
                const onSubmit = ({ email, password }) => {
                  const input = { email, password } 
                  const variables = { input }
                  register({ variables }).then(({data}) => { 
                    const { signup } = data; 
                    activateAuth(signup)
                  })
                }

                const errorMsg = error && 'Ocurrió un error.'

                return (
                  <>
                    <UserForm onSubmit={onSubmit} disabled={loading} error={errorMsg} title="Registrarse" />
                    <Text>¿Tienes cuenta? <span role="button" onClick={() => setRegister(false)}>Inicia Sesión</span></Text>
                  </>
                )
              }
            }
          </RegisterMutation>

        : <LoginMutation>
            { 
              (login, { data, loading, error }) => { 
                const onSubmit = ({ email, password }) => {
                  const input = { email, password } 
                  const variables = { input }
                  login({ variables }).then(({data}) => { 
                    const { login } = data; 
                    activateAuth(login)
                  })
                }

                const errorMsg = error && 'Ocurrió un error.'

                return (
                  <>
                    <UserForm onSubmit={onSubmit} disabled={loading} error={errorMsg} title="Iniciar Sesión" />
                    <Text>¿No tienes cuenta? <span role="button" onClick={() => setRegister(true)}>¡Registrate!</span></Text>
                  </>
                )
              }
            }
          </LoginMutation>
      }
    </Layout>
  )
}