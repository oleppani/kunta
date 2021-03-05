import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_LINKS, CREATE_LINK } from '../queries'
import {
  useParams
} from "react-router-dom"

import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel
} from '@material-ui/core'
import {useTranslation} from "react-i18next"

const LinkForm = ({ setError }) => {
  const [initiativeid, setInitiative] = useState('323')
  const [linktext, setText] = useState('selitys')
  const [linktype, setType] = useState('3')
  const [userid, setUser] = useState('ee')
  const [linkdatetime, setDatetime] = useState('werewrwe')
  const [sectionid, setSectionid] = useState('')
  const [proposalid, setProposalid] = useState('erw')
  const [commentid, setCommentid] = useState('rw')
  const [linkref, setLinkref] = useState('https://www.mtvuutiset.fi/')
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')

  const [ createLink ] = useMutation(CREATE_LINK, {
    refetchQueries: [  {query: ALL_LINKS} ],
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
 let sectionss=''
  sectionss = useParams().id
  const uusi = async (event) => {
    console.log(event)
    const aika = Date.now()
    const pvm = new Date(aika)
    setDatetime(pvm.toString())
    setText(event)
    setSectionid(sectionss)
  }
  
  const submit = async (event) => {
    event.preventDefault()
    
    createLink({
      variables: { linkdatetime, linktext, commentid, proposalid, linktype, initiativeid, linkref, sectionid: sectionid.length > 0 ? sectionid : 'tyhjä' }
    })

    setDatetime('rwerwer')
    setText('')
    setSectionid(sectionss)
  }
  //useEffect(() => {
   // setSectionid(sectionss)
  //}, [])
  return (
    <div>
      <h2>{t('headers.addlink')}</h2>

      <form onSubmit={submit}>
      {t('common.linktext')} <TextField
          value={linktext}
          onChange={({ target }) => uusi(target.value)}
        /><br />
        {t('common.section')}: <TextField
          value={sectionid}
          onChange={({ target }) => setSectionid(target.value)}
        /><br />
        {t('common.proposal')}: <TextField
          value={proposalid}
          onChange={({ target }) => setProposalid(target.value)}
        /><br />
        {t('common.initiative')}: <TextField
          value={initiativeid}
          onChange={({ target }) => setInitiative(target.value)}
        /><br />
        {t('common.user')}: <TextField
          value={userid}
          onChange={({ target }) => setUser(target.value)}
        /><br />
        {t('common.comment')}: <TextField
          value={commentid}
          onChange={({ target }) => setCommentid(target.value)}
        /><br />
        {t('common.linkref')}: <TextField
          value={linkref}
          onChange={({ target }) => setLinkref(target.value)}
        /><br />
        <FormControl component="fieldset">
          <FormLabel component="legend">{t('common.linktype')}</FormLabel>
          <RadioGroup aria-label="linktype" name="linktype" value={linktype} onChange={({ target }) => setType(target.value)}>
            <FormControlLabel value='1' control={<Radio />} label={t('common.site')} />
            <FormControlLabel value='2' control={<Radio />} label={t('common.picture')} />
            <FormControlLabel value='3' control={<Radio />} label={t('common.video')} />
            <FormControlLabel value='4' control={<Radio />} label={t('common.audio')} />
            <FormControlLabel value='5' control={<Radio />} label={t('common.document')} />
            <FormControlLabel value='6' control={<Radio />} label={t('common.other')} />
            <FormControlLabel value='99' disabled control={<Radio />} label={t('common.notdefined')} />
          </RadioGroup>
        </FormControl>
        <br />
        <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.save')}</Button>
      </form>
    </div>
  )
}

export default LinkForm