import React, { useState, useEffect}  from 'react'
import { useMutation } from '@apollo/client'
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
import { ALL_VOTES, CREATE_VOTING } from '../queries'
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

const stylea = {
  border: 1,
  borderStyle: 'solid'
}
const Users = ({ users, sections, setError, votes }) => {
  const [t, i18n] = useTranslation('common')
  const [userid, setUserid] = useState('')  

  const [ createVoting ] = useMutation(CREATE_VOTING, {
    refetchQueries: [  {query: ALL_VOTES} ],
    onError: (error) => {
      
      //setError(error.graphQLErrors[0].message)
      setError('virhe')
    },
    /*update: (store, response) => {
      updateCacheWith(response.data.addComment)
    }*/
  })
  const uusi = async (event) => {
    console.log(event)
    const aika = Date.now()
    const pvm = new Date(aika)
    createVoting({
      variables: { proposalid:event, userid: userid.length > 0 ? userid : 'tyhjä', votedatetime:pvm.toString(), sectionid:sectionss }
     })
 
  }


  let sectionss=1
  /*sectionss = useParams().id
  let valittu = sections.filter(function(el) {
    return el.id===sectionss
  })*/
 /* console.log(users)
  let valitut = users.filter(function(el) {
    return el.sectionid===sectionss
  })
  */
 let valitut=[]
  let uus=[]
  let viranaanet=[]
  let valittu=[]
  //let users =[]
  console.log(users)
  if(users){
    return (
      <div>
        <h3>{t('headers.users')}</h3>
        {users.map(prop => (
            <div style={stylea}>
              <p><b>{t('common.name')}</b> {prop.name}<br />
                <b>{t('common.email')}</b> {prop.email}<br />
                <b>{t('common.address')}</b> {prop.address} <br />
                <b>{t('common.postnumber')}</b> {prop.postnumber}<br />
                <b>{t('common.postoffice')}</b> {prop.postoffice}<br />
                <b>{t('common.phone')}</b> {prop.phone}<br />
                <b>{t('common.active')}</b> {prop.activated}<br />
                <b>{t('common.usertype')}</b> {prop.type}<br />
            </p>
            </div>   
            ))}
      </div>
    )
  }else{
    return (
      <li className='userit'>
         {t('common.nousers')}
      </li>
    )
  }
}

export default Users