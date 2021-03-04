import React, { useState, useEffect } from 'react'
import { FIND_USER, CREATE_USER, ALL_USERS, EDIT_USER } from '../queries'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
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
import { useLazyQuery, useMutation } from '@apollo/client'
import {useTranslation} from "react-i18next"
/*
import {useTranslation} from "react-i18next"
const [t, i18n] = useTranslation('common')
{t('headers.agendas')}

*/
const stylea = {
  background: 'white',
  opacity: 0.9
}
const User = ({ createComment, user, setError}) => {
  const [t, i18n] = useTranslation('common')
  const [newComment, setNewComment] = useState('')
  const [useri, setUser] = useState(null)
  const [getUser, result] = useLazyQuery(FIND_USER)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [activated, setActivated] = useState('')
  const [datetime, setDatetime] = useState('')
  const [type, setType] = useState('')
  const [postnumber, setPostnumber] = useState('')
  const [postoffice, setPostoffice] = useState('')
  const [password, setPassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const [repassword, setRepassword] = useState('')
  
  const bcryptjs = require('bcryptjs')
  
  const showUser = (user) => {
    getUser({ variables: { email: user } })
  }
  useEffect(() => {
    if (result.data) {
      setUser(result.data.findUser)
      console.log(useri)
    }

  }, [result.data])
  
  useEffect(() => {
    getUser({ variables: { email: user } })
  }, [])



  /**showUser(user)
  */
  const handleChange = (event) => {
    setNewComment(event.target.value)
  }
  const [ editUseri ] = useMutation(EDIT_USER, {
    refetchQueries: [  {query: ALL_USERS} ],
    onError: (error) => {
      setError('virhe')
      //error.graphQLErrors[0].message
      console.log(error)
    }
  })


  const editUser = async (event) => {
    event.preventDefault()
    if(password===repassword){
      //const saltRounds = 17
      var salt = bcryptjs.genSaltSync(12)
      const passwordhash = await bcryptjs.hash(password, salt)
      editUseri({ variables: { name, email, passwordhash, address, postnumber, postoffice, datetime, phone, activated: false, type:'1'  }
      })

      setNewComment('')
    }
  }
  if(useri){
    /*setName(useri.name)
    setPhone(useri.phone)
    setEmail(useri.email)
    setPostnumber(useri.postnumber)
    setPostoffice(useri.postoffice)*/
    return (
      <div>
        <h2>{t('headers.owninfo')}</h2> 
        <form onSubmit={editUser}>
        {t('common.name')} <TextField value={name} onChange={({ target }) => setName(target.value)} /><br />
        {t('common.phone')} <TextField value={phone} onChange={({ target }) => setPhone(target.value)} /><br />
        {t('common.email')} <TextField value={email} onChange={({ target }) => setEmail(target.value)} /><br />
        {t('common.postnumber')} <TextField value={address} onChange={({ target }) => setAddress(target.value)} /><br />
        {t('common.postnumber')} <TextField value={postnumber} onChange={({ target }) => setPostnumber(target.value)} /><br />
        {t('common.postoffice')} <TextField value={postoffice} onChange={({ target }) => setPostoffice(target.value)} /><br />
        {t('common.newpassword')} <TextField value={newpassword}  type='password' onChange={({ target }) => setNewpassword(target.value)}/><br />
          {t('common.repassword')} <TextField value={repassword} type='password' onChange={({ target }) => setRepassword(target.value)}/><br />
          {t('common.currentpassword')} <TextField value={password} type='password' onChange={({ target }) => setPassword(target.value)} /><br />
          <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.save')}</Button>
        </form> 
      </div>
    )
  }else{
    return (
      <div>
        <h2>{t('headers.owninfo')}</h2> 
        <form onSubmit={editUser}>
        {t('common.name')} <TextField value='' /><br />
        {t('common.phone')} <TextField value='' /><br />
        {t('common.email')} <TextField value='' /><br />
        {t('common.municipal')} <TextField value='' /><br />
        {t('common.newpassword')} <TextField
            value={newComment}
            onChange={handleChange}
          /><br />
          {t('common.repassword')} <TextField /><br />
          {t('common.currentpassword')} <TextField /><br />
          <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.save')}</Button>
        </form> 
      </div>
    )
  }
}
export default User