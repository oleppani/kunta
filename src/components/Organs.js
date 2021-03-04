import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
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
import { FIND_ORGAN } from '../queries'
import {useTranslation} from "react-i18next"
const stylea = {
  background: 'white',
  opacity: 0.9
}
const Organs = ({ organs }) => {
  const [organ, setOrgan] = useState(null)
  const [getOrgan, result] = useLazyQuery(FIND_ORGAN)
  const [t, i18n] = useTranslation('common')
  const showOrgan = (name) => {
    getOrgan({ variables: { nameToSearch: name } })
  }

  useEffect(() => {
    if (result.data) {
      setOrgan(result.data.findOrgan)
    }
  }, [result.data])
//<div style={stylea}>
  if (organ) {
    return(
      <div>
        <h2>{organ.organmunicipality}</h2>
        <div>{organ.organsname} {organ.organshort}</div>
        <button onClick={() => setOrgan(null)}>{t('common.close')}</button>
      </div>
    )
  }
  
  return (
    <div>
      <h2>{t('headers.organs')}</h2>
      {organs.map(p =>
        <Button variant="contained" size='normal' color="inherit" component={Link} to={`/meetings/${p.organname}`}>
         {p.organname}
       </Button> 
      )}

    </div>
  )
}

export default Organs