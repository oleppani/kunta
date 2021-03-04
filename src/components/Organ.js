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
import { FIND_ORGAN } from '../queries'
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
const Organ = ({ organs }) => {
  const [t, i18n] = useTranslation('common')
  const [organ, setOrgan] = useState(null)
  const [getOrgan, result] = useLazyQuery(FIND_ORGAN)
  let munic=useParams().chosenmunicipal
  const showOrgan = (name) => {
    getOrgan({ variables: { nameToSearch: name } })
  }

  /*useEffect(() => {
    if (result.data) {
      setOrgan(result.data.findOrgan)
    }
  }, [result.data])
*/
  /*if (organ) {
    return(
      <div>
        <h2>{organ.name}</h2>
        <div>{organ.address.street} {organ.address.city}</div>
        <div>{organ.phone}</div>
        <button onClick={() => setOrgan(null)}>close</button>
      </div>
    )
  }
  */

  let valittu = organs.filter(function(el) {
    return el.organmunicipality===munic
  })
  //console.log(valittu)
  return (
    <div>
      <h2>{t('headers.organs')}</h2>
      {valittu.map(p =>
         <Button variant="contained" size='normal' color="inherit" component={Link} to={`/meetings/${p.organname}`}>
         {p.organname}
       </Button>
      )}

    </div>
  )
}

export default Organ