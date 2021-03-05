import React, { useState } from 'react'

import {
  TextField,
  Button
} from '@material-ui/core'
import {useTranslation} from "react-i18next"


const Info = ({ createComment }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  const [newComment, setNewComment] = useState('')

  const handleChange = (event) => {
    setNewComment(event.target.value)
  }

  const addComment = (event) => {
    event.preventDefault()
    /*createComment({
      content: newComment,
      important: false,
    })
    */
    setNewComment('')
  }

  return (
    <div>
      <h2>{t('common.info')}</h2> 
      <p>{t('common.takecontact')}</p>
      <form onSubmit={addComment}>
      {t('common.name')} <TextField /><br />
      {t('common.phone')} <TextField /><br />
      {t('common.email')} <TextField /><br/>
      {t('common.thing')} <TextField
          value={newComment}
          onChange={handleChange}
        /><br />
        <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.send')}</Button>
      </form>
      <p>{t('common.usage')}</p>
      <p>{t('common.contactinfo')}</p> 
    </div>
  )
}
export default Info