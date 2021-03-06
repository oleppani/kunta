import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_INITIATIVES, CREATE_INITIATIVE,  } from '../queries'

import {
  TextField,
  Button
} from '@material-ui/core'


import {useTranslation} from "react-i18next"
/*
import {useTranslation} from "react-i18next"
const [t, i18n] = useTranslation('common')
{t('headers.agendas')}

*/

const InitiativeForm = ({ setError }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  const [initiativetext, setText] = useState('')
  //const [userid, setUser] = useState('werewrwe')
  const [organid, setOrganid] = useState('')
  //const [initiativedatetime, setDatetime] = useState('')
  const [initiativeinfo, setInfo] = useState('')
  const [initiativeaccepted, setAccepted] = useState('')
  const [active, setActive] = useState('')


  const [ createInitiative ] = useMutation(CREATE_INITIATIVE, {
    refetchQueries: [  {query: ALL_INITIATIVES} ],
    onError: (error) => {
      
      //setError(error.graphQLErrors[0].message)
      setError('virhe')
    },
    /*update: (store, response) => {
      updateCacheWith(response.data.addComment)
    }*/
  })

/*
  const handleChange = (event) => {
    setNewComment(event.target.value)
  }

  const addComment = (event) => {
    event.preventDefault()
    createComment({
      content: newComment,
      important: false,
    })

    setNewComment('')
  }
  */
 /* const uusi = async (event) => {
    console.log(event)
    const aika = Date.now()
    const pvm = new Date(aika)
    setDatetime(pvm.toString())
    setText(event)
  }*/
  const submit = async (event) => {
    event.preventDefault()
    const aika = Date.now()
    const pvm = new Date(aika)
    //setDatetime(pvm.toString())
    createInitiative({
      variables: { organid, initiativetext, initiativedatetime:pvm.toString(), initiativeinfo, initiativeaccepted, active}
    })
    setText('')
    //setDatetime('')
    setOrganid('')
    //setUser('')
    setActive('')
    setAccepted('')
    setInfo('')
  }


  return (
    <div>
      <h2>{t('headers.addinitiative')}</h2>

      <form onSubmit={submit}>
      {t('common.initiative')} <TextField
          value={initiativetext}
          onChange={({ target }) => setText(target.value)}
        /><br />
        {t('common.organ')} <TextField
           value={organid}
          onChange={({ target }) => setOrganid(target.value)}
        /><br />
        {t('common.active')} <TextField
          value={active}
          onChange={({ target }) => setActive(target.value)}
        /><br />
        {t('common.accepted')} <TextField
          value={initiativeaccepted}
          onChange={({ target }) => setAccepted(target.value)}
        /><br />
        {t('common.info')}<TextField
          value={initiativeinfo}
          onChange={({ target }) => setInfo(target.value)}
        /><br />
        <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.save')}</Button>
      </form>
    </div>
  )
}

export default InitiativeForm