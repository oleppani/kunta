import React from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@material-ui/core'

import {
  Link
} from "react-router-dom"
import {useTranslation} from "react-i18next"
const Agendas = ({agendas}) => {
  // eslint-disable-next-line
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