import React, { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'

import { LOGIN } from '../queries'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TextField,
  Button,
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  InputBase,

} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
  useParams
} from "react-router-dom"
const Logout = ({ setError, setToken, onLogin, log, setLogout, logout, client}) => {

  const stylea = {
    background: 'white',
    opacity: 0.9
  }
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [ login,result ] = useMutation(LOGIN, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    }
  })
  let loggedin = localStorage.getItem('daas-user-token')
  
  console.log(logout)
  setToken(null)
  localStorage.clear()
  client.resetStore()
  setLogout(0)
  
  useEffect(() => {
    
    console.log(log)
    if ( result.data ) {
      const token = result.data.login.value
      console.log(result.data.login)
      setToken(token)
      localStorage.setItem('daas-user-token', token)
    }
  }, [result.data]) // eslint-disable-line

  const submit = async (event) => {
    event.preventDefault()

    login({
      variables: { username, password }
    })
    event.preventDefault()
    //onLogin('oleppani')
    //history.push('/')
  }
 
  return (
    <div style={stylea}>
      <form onSubmit={submit}>
        Olet kirjautunut ulos <br /> <br />
        <h3>Kirjaudu sisään</h3>
        <div>
          Käyttäjätunnus <TextField
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          Salasana <TextField
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type='submit'>Kirjaudu</Button>
      </form>
    </div>
  )
}
export default Logout