import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_MEETINGS, CREATE_MEETING } from '../queries'

import {useTranslation} from "react-i18next"
import {
  TextField,
  Button
} from '@material-ui/core'

const MeetingForm = ({ setError }) => {

  const [meetingtext, setText] = useState('')
  const [meetingdatetime, setDatetime] = useState('werewrwe')
  const [organid, setOrganid] = useState('')
  const [meetingmunicipality, setMunicipality] = useState('')
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')

  const [ createMeeting ] = useMutation(CREATE_MEETING, {
    refetchQueries: [  {query: ALL_MEETINGS} ],
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
  const uusi = async (event) => {
    console.log(event)
    const aika = Date.now()
    const pvm = new Date(aika)
    setDatetime(pvm.toString())
    setText(event)
  }
  const submit = async (event) => {
    event.preventDefault()
    
    createMeeting({
      variables: { meetingdatetime, meetingtext, meetingmunicipality, organid: organid.length > 0 ? organid : 'tyhjä' }
    })

    setDatetime('rwerwer')
    setText('')
    setOrganid('')
    setMunicipality('')
  }
  const stylea = {
    background: 'white',
    opacity: 0.9
  }
  return (
    <div style={stylea}>
      <h2>{t('headers.addmeeting')}</h2>

      <form onSubmit={submit}>
        {t('common.time')}<TextField
          value={meetingtext}
          onChange={({ target }) => uusi(target.value)}
        /><br />
        {t('common.organ')}<TextField
          value={organid}
          onChange={({ target }) => setOrganid(target.value)}
        /><br />
        {t('common.municipal')}<TextField
          value={meetingmunicipality}
          onChange={({ target }) => setMunicipality(target.value)}
        />
        <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.save')}</Button>
      </form>
    </div>
  )
}

export default MeetingForm