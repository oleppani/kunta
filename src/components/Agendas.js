import React from 'react'

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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom"
import {useTranslation} from "react-i18next"
const stylea = {
  background: 'white',
  opacity: 0.9
}
const Agendas = ({agendas}) => {
  const [t, i18n] = useTranslation('common')
  return(
  <div>
    <h2>{t('headers.agendas')}</h2>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {agendas.map(agenda => (
            <TableRow key={agenda.id}>
              <TableCell>
                <Link to={`/agendas/${agenda.id}`}>{agenda.agendaname}</Link>
              </TableCell>
              <TableCell>
                {agenda.organ}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>
)
}

export default Agendas