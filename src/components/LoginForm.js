import React, { useState, useEffect } from 'react'
import { useMutation, useQuery, useLazyQuery } from '@apollo/client'

import { LOGIN, FIND_USER } from '../queries'
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
import {useTranslation} from "react-i18next"
/*
import {useTranslation} from "react-i18next"
const [t, i18n] = useTranslation('common')
{t('headers.agendas')}

*/
const stylea = {
  background: 'white',
  opacity: 0.9
}
const LoginForm = ({ setUsertype, setError, setToken, onLogin, log, setLogout, logout, client }) => {
  const [t, i18n] = useTranslation('common')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const bcryptjs = require('bcryptjs')

  const [getPerson, resultt] = useLazyQuery(FIND_USER)   
  const [person, setPerson] = useState(null)
  const showPerson = (email) => {    
    getPerson({ 
      variables: { emailToSearch: email } 
    })  
  }
  useEffect(() => {
    if (resultt.data) {  
      setUsertype(resultt.data.findUser['type'])
      localStorage.setItem('usertype', resultt.data.findUser['type'])
    }
    
  }, [resultt])
  console.log(person)

  const [ login,result ] = useMutation(LOGIN, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    }
  })
  let loggedin = localStorage.getItem('daas-user-token')
 
  useEffect(() => {
    
    if ( result.data ) {
      const token = result.data.login.value
      console.log(result.data.login)
      setToken(token)
      localStorage.setItem('daas-user-token', token)
      localStorage.setItem('email', email)
    }
  }, [result.data]) // eslint-disable-line

  const submit = async (event) => {
    event.preventDefault()
    //const saltRounds = 17
    //const passwordhash = await bcryptjs.hash(password, saltRounds)
    const passwordhash=password
    //var salt = bcryptjs.genSaltSync(12)
    //const passwordhash = await bcryptjs.hash(password, salt)
    console.log(passwordhash)
    login({
      variables: { email, passwordhash }
    })
    getPerson({
      variables: { email }
    })
    event.preventDefault()
    //onLogin('oleppani')
    //history.push('/')
  }
  console.log(logout)
  if(logout===1){
    setToken(null)
    localStorage.clear()
    client.resetStore()
    setLogout(0)
    console.log(log)
  }

  return (
    <div>
      <form onSubmit={submit}>
        <h3>{t('headers.login')}</h3>
        <div>
        {t('common.email')} <TextField
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
        {t('common.password')} <TextField
            type='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type='submit'>{t('common.login')}</Button>
      </form>
    </div>
  )
}

export default LoginForm