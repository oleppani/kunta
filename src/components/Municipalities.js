import React, { useState, useEffect } from 'react'
import { FIND_MUNICIPAL } from '../queries'
import {
  Link
} from "react-router-dom"

import {
  Button
} from '@material-ui/core'
import { useLazyQuery } from '@apollo/client'


const Municipalities = ({municipalities, munic}) => {
  // eslint-disable-next-line
  const [municipal, setMunicipal] = useState(null)
  // eslint-disable-next-line
  const [getMunicipal, result] = useLazyQuery(FIND_MUNICIPAL)

  /*const showMunicipal = (name) => {
    getMunicipal({ variables: { nameToSearch: name } })
  }
*/
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