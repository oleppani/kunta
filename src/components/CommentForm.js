import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_COMMENTS, CREATE_COMMENT } from '../queries'
import {
  useParams
} from "react-router-dom"

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
const CommentForm = ({ setError }) => {
  const [commenttext, setText] = useState('')
  const [commentdatetime, setDatetime] = useState('werewrwe')
  const [sectionid, setSectionid] = useState('')
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')

  const [ createCommentt ] = useMutation(CREATE_COMMENT, {
    refetchQueries: [  {query: ALL_COMMENTS} ],
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
    
    createCommentt({
      variables: { commentdatetime, commenttext, sectionid: sectionid.length > 0 ? sectionid : 'tyhjä' }
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
      <h2>{t('headers.addcommentorinformation')}</h2>

      <form onSubmit={submit}>
      {t('common.comment')} <TextField
          value={commenttext}
          onChange={({ target }) => uusi(target.value)}
        /><br />
        {t('common.sectionnumber')}: <TextField
          value={sectionid}
          onChange={({ target }) => setSectionid(target.value)}
        /><br />
        <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.save')}</Button>
      </form>
    </div>
  )
}

export default CommentForm