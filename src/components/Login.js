import React from 'react'
import {
  useHistory
} from "react-router-dom"

import {
  TextField,
  Button
} from '@material-ui/core'

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