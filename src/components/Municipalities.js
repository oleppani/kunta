import React, { useState, useEffect } from 'react'
import { FIND_MUNICIPAL } from '../queries'
import Organs from './Organs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
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
import { useLazyQuery } from '@apollo/client'

import { FIND_ORGAN } from '../queries'
const stylea = {
  background: 'white',
  opacity: 0.9
}
const Municipalities = ({municipalities, munic}) => {
  const [municipal, setMunicipal] = useState(null)
  const [getMunicipal, result] = useLazyQuery(FIND_MUNICIPAL)

  const showMunicipal = (name) => {
    getMunicipal({ variables: { nameToSearch: name } })
  }

  useEffect(() => {
    if (result.data) {
      setMunicipal(result.data.findMunicipal)
    }
  }, [result.data])
/*
<Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/notes">notes</Link>
        <Link style={padding} to="/users">users</Link>
      </div>

      <Switch>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>

*/

  const padding = {
    padding: 5
  }
  //console.log(municipalities)
  let muni = municipalities.map(mu => (
    mu.organmunicipality
  ))
  let unique = [...new Set(muni)]
  console.log(unique)
  return(
    <div>
      {unique.map(mun => ( 
            <Button variant="contained" size='normal' color="inherit" component={Link} to={`/organs/${mun}`}>
            {mun}
          </Button>
      ))}
    </div>
 
  )
}
export default Municipalities