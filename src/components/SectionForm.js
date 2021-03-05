import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_SECTIONS, CREATE_SECTION } from '../queries'
import {
  useParams
} from "react-router-dom"

import {
  TextField,
  Button

} from '@material-ui/core'

import {useTranslation} from "react-i18next"

const SectionForm = ({ setError }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  const [casetext, setText] = useState('Tänään rakennetaan pönttö, iso pönttö.')
  const [preparer, setPreparer] = useState('Jouko Johtaja')
  const [caseid, setCaseid] = useState('602cc52cb8b77407e4ea845a')
  const [proposalforadecision, setProposal] = useState('Ehdottomasti rakennetaan pönttö.')
  const [x, setX] = useState('')
  const [y, setY] = useState('')
  const [z, setZ] = useState('')
  const [address, setAddress] = useState('')
  const [postnumber, setPostnumber] = useState('')
  const [postoffice, setPostoffice] = useState('')
  const [country, setCountry] = useState('Suomi')
  const [attachments, setAttachments] = useState('')
  const [sectionmunicipality, setMunicipality] = useState('Pori')
  let miiting=''
  miiting=useParams().id
  const [agendaid, setAgenda] = useState(miiting)

  

  //setAgenda(miiting)
  const [ createSection ] = useMutation(CREATE_SECTION, {
    refetchQueries: [  {query: ALL_SECTIONS} ],
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
    
    createSection({
      variables: { caseid, preparer, casetext,proposalforadecision, x, y, z, address, postnumber, postoffice, country, attachments, sectionmunicipality,agendaid }
    })

    setPreparer('')
    setText('')
    setCaseid('')
    setProposal('')
    setY('')
    setX('')
    setAddress('')
    setPostoffice('')
    setPostnumber('')
    setAttachments('')
    setCountry('')
    setMunicipality('')
    setAgenda('')
  }
  
  return (
    <div>
      <h2>{t('headers.addsection')}</h2>

      <form onSubmit={submit}>
        {t('common.preparer')}<TextField
          value={preparer}
          onChange={({ target }) => setPreparer(target.value)}
        /><br />
        {t('common.sectionnumber')}<TextField
          value={caseid}
          onChange={({ target }) => setCaseid(target.value)}
        /><br />
        {t('common.explanation')}<TextField
          value={casetext}
          onChange={({ target }) => setText(target.value)}
        /><br />
        {t('common.proposal')}<TextField
          value={proposalforadecision}
          onChange={({ target }) => setProposal(target.value)}
        /><br />
        X<TextField
          value={x}
          onChange={({ target }) => setX(target.value)}
        /><br />
        Y<TextField
          value={y}
          onChange={({ target }) => setY(target.value)}
        /><br />
        Z<TextField
          value={z}
          onChange={({ target }) => setZ(target.value)}
        /><br />
        {t('common.address')}<TextField
          value={address}
          onChange={({ target }) => setAddress(target.value)}
        /><br />
        {t('common.postnumber')}<TextField
          value={postnumber}
          onChange={({ target }) => setPostnumber(target.value)}
        /><br />
        {t('common.postoffice')}<TextField
          value={postoffice}
          onChange={({ target }) => setPostoffice(target.value)}
        /><br />
        {t('common.country')}<TextField
          value={country}
          onChange={({ target }) => setCountry(target.value)}
        /><br />
        {t('common.attachments')}<TextField
          value={attachments}
          onChange={({ target }) => setAttachments(target.value)}
        /><br />
        {t('common.municipal')}<TextField
          value={sectionmunicipality}
          onChange={({ target }) => setMunicipality(target.value)}
        /><br />
        {t('common.meeting')}<TextField
          value={agendaid}
          onChange={({ target }) => setAgenda(target.value)}
        /><br />
        <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.save')}</Button>
      </form>
    </div>
  )
}

export default SectionForm