import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from './base.js'
import { AuthContext } from './Auth.js'
import styled from 'styled-components'

const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f4f4f5;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #524962;
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid dimgray; */
  border-radius: 6px;
  padding: 20px;
  background: #d5dbde;
  & h1 {
    margin-top: 0;
  }
  & form {
    display: flex;
    flex-direction: column;
  }
  & input {
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #524962;
    margin: 8px;
  }
  & button {
    background: #524962;
    border: 0;
    border-radius: 6px;
    padding: 10px;
    color: #fff;
    margin: 10px 8px;
    font-weight: 100;
    font-size: 17px;
    &:hover {
      background: #3f374d;
    }
  }
`

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value)
        history.push('/')
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to='/' />
  }

  return (
    <Bg>
      <Wrapper>
        <h1>Log in</h1>
        <form onSubmit={handleLogin}>
          <input name='email' type='email' placeholder='Email' />
          <input name='password' type='password' placeholder='Password' />
          <button type='submit'>Log in</button>
        </form>
      </Wrapper>
    </Bg>
  )
}

export default withRouter(Login)
