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


const Initiative = ({initiatives}) => {
  const asia = useParams().id

  let valittu = initiatives.filter(function(el) {
    return el.id===asia
  })

  const stylea = {
    background: 'white',
    opacity: 0.9
  }
/*
  const valitut = valittu.map(item => {
    const c = {}

    c['preparer'] = item.preparer
    c['casetext'] = item.casetext
    c['caseid'] = item.caseid
    //c[''] = item.
    return c
})
  */
 let valitut={initiativetext: 'ladataan...', organid:'ladataan...', active:'ladataan...',initiativeinfo:'ladataan...',initiativeaccepted:'ladataan...'}
 if(valittu[0]){
  valitut = valittu[0]
  console.log(valitut)
 }
 console.log(valitut)
  /*let valitut={}
  valittu[0]
  console.log(valittu[0])
  */
  return(
  <div style={stylea}>
    <h2>Aloite: {valitut.initiativetext}</h2><br />
    Toimielin: {valitut.organid}<br />
        Aktiivinen: {valitut.active}<br />
        Info: {valitut.initiativeinfo}<br />
        Hyväksytty: {valitut.initiativeaccepted}<br />
  </div>
)
}

export default Initiative