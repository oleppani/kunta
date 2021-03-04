import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_ORGANS, CREATE_ORGAN } from '../queries'
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
import {useTranslation} from "react-i18next"
const stylea = {
  background: 'white',
  opacity: 0.9
}

const OrganForm = ({ setError }) => {
  const [organname, setName] = useState('')
  const [organshort, setShort] = useState('')
  const [organmunicipality, setMunicipality] = useState('')
  const [t, i18n] = useTranslation('common')

  const [ createOrgam ] = useMutation(CREATE_ORGAN, {
    refetchQueries: [  {query: ALL_ORGANS} ],
    onError: (error) => {
      setError('virhe')
      //error.graphQLErrors[0].message
      console.log(error)
    }
  })

  const submit = async (event) => {
    event.preventDefault()

    createOrgam({
      variables: { organname, organshort, organmunicipality }
    })

    setName('')
    setShort('')
    setMunicipality('')
  }

  return (
    <div style={stylea}>
      <h2>{t('headers.addorgan')}</h2>
      <form onSubmit={submit}>
        <div>
        {t('common.name')} <TextField
            value={organname}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          {t('common.abbreviation')}<TextField
            value={organshort}
            onChange={({ target }) => setShort(target.value)}
          />
        </div>
        <div>
          {t('common.municipal')} <TextField
            value={organmunicipality}
            onChange={({ target }) => setMunicipality(target.value)}
          />
        </div>
        <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type='submit'>{t('common.add')}</Button>
      </form>
    </div>
  )
}

export default OrganForm