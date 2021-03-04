import React, { useState, useEffect } from 'react'
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

import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { Alert } from '@material-ui/lab'

const Login = (props) => {
  const history = useHistory()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('')
    history.push('/')
    props.logout(null)
  }
  const stylea = {
    background: 'white',
    opacity: 0.9
  }
  
  return (
    <div style={stylea}>
      <h2>login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <TextField label="username" />
        </div>
        <div>
          <TextField  label="password" type='password' />
        </div>
        <div>
          <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">
            login
          </Button>
        </div>
      </form>
    </div>
  )
}
export default Login