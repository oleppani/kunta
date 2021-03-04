import React, { useState } from 'react'
import { useMutation, useEffect } from '@apollo/client'

import { ALL_USERS, CREATE_USER } from '../queries'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
  useParams
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

import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { Alert } from '@material-ui/lab'
import { NoteTwoTone } from '@material-ui/icons'
import {useTranslation} from "react-i18next"
/*
import {useTranslation} from "react-i18next"
const [t, i18n] = useTranslation('common')
{t('headers.agendas')}

*/

const UserForm = ({ setError }) => {
  const [t, i18n] = useTranslation('common')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [postnumber, setPostnumber] = useState('')
  const [postoffice, setPostoffice] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [activated, setActivated] = useState('')
  const [datetime, setDatetime] = useState('')
  const [type, setType] = useState('')

  const bcryptjs = require('bcryptjs')

  const [ createUser ] = useMutation(CREATE_USER, {
    refetchQueries: [  {query: ALL_USERS} ],
    onError: (error) => {
      
      //setError(error.graphQLErrors[0].message)
      setError('virhe')
    },
    /*update: (store, response) => {
      updateCacheWith(response.data.addComment)
    }*/
  })
  let userss=''
  userss = useParams().id
  const uusi = async (event) => {
    console.log(event)
    const aika = Date.now()
    const pvm = new Date(aika)
    setDatetime(pvm.toString())
    setName(event)
    //setUser(sectionss)
  }
  
  const submit = async (event) => {
    event.preventDefault()
    if(password===repassword){
      //const saltRounds = 17
      var salt = bcryptjs.genSaltSync(12)
      const passwordhash = await bcryptjs.hash(password, salt)
      console.log(passwordhash)
     /* const user = new User({
        username: body.username,
        name: body.name,
        passwordHash,
      })
    
      const savedUser = await user.save()
    
      response.json(savedUser)
      */
      //const passwordhash = password
      createUser({
        variables: { name, email, passwordhash, address, postnumber, postoffice, datetime, phone, activated, type  }
      })
      //sectionid: sectionid.length > 0 ? sectionid : 'tyhjä'
      setDatetime('')
      setName('')
      setEmail('')
      setPassword('')
      setAddress('')
      setPostnumber('')
      setPostoffice('')
      setPhone('')
      setRepassword('')
      setType('')
      setActivated('')
      //setSectionid(sectionss)
    }else{
      alert('Salasanat eivät täsmää')
    }
  }
  const stylea = {
    background: 'white',
    opacity: 0.9
  }
  //useEffect(() => {
   // setSectionid(sectionss)
  //}, [])
  return (
    <div style={stylea}>
      <h2>{t('headers.adduser')}</h2>

      <form onSubmit={submit}>
      {t('common.name')} <TextField
          value={name}
          onChange={({ target }) => uusi(target.value)}
        /><br />
        {t('common.email')}  <TextField
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        /><br />
        {t('common.password')} <TextField type='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        /><br />
        {t('common.repassword')}  <TextField type='password'
          value={repassword}
          onChange={({ target }) => setRepassword(target.value)}
        /><br />
        {t('common.address')}  <TextField
          value={address}
          onChange={({ target }) => setAddress(target.value)}
        /><br />
        {t('common.postnumber')}  <TextField
          value={postnumber}
          onChange={({ target }) => setPostnumber(target.value)}
        /><br />
        {t('common.postoffice')}  <TextField
          value={postoffice}
          onChange={({ target }) => setPostoffice(target.value)}
        /><br />
        {t('common.phone')}  <TextField
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        /><br />
       {t('common.active')}  <TextField
          value={activated}
          onChange={({ target }) => setActivated(target.value)}
        /><br />
        {t('common.usertype')}  <TextField
          value={type}
          onChange={({ target }) => setType(target.value)}
        /><br />
        <Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type="submit">{t('common.add')} </Button>
      </form>
    </div>
  )
}

export default UserForm