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
import { ALL_VOTES, CREATE_VOTING } from '../queries'
import { Alert } from '@material-ui/lab'
import { NoteTwoTone } from '@material-ui/icons'
const stylea = {
  background: 'white',
  opacity: 0.9
}

const Comment = ({ comment, sections, setError, votes }) => {
  const label = comment.important
    ? 'make not important' : 'make important'

  const [userid, setUserid] = useState('')
 
  let sectionss=''
  sectionss = useParams().id
  let valittu = sections
  if(sections){
    valittu = sections.filter(function(el) {
      return el.id===sectionss
    })
  }
  
  console.log(valittu)
  //console.log(comment.data)
  let comments =[]
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
  
  
  
  let valitut = comment
  if(sectionss){
    valitut = comment.filter(function(el) {
      return el.sectionid===sectionss
    })
  }
  const stylea = {
    background: 'white',
    opacity: 0.9
  }
  
  let aanet= votes
  if(sectionss){
    aanet=votes.filter(function(aa) {
      return aa.sectionid===sectionss
    } )
  }
  let aanetasiat= aanet.map(p => p.commentid)
  let maarat = Object.values(aanet.reduce((obj, { commentid }) => {
    if (obj[commentid] === undefined)
       obj[commentid] = { commentid: commentid, occurrences: 1 };
    else
       obj[commentid].occurrences++;
    return obj;
 }, {}));
 let maara = maarat.map(o => {
  const sisalto = {};

  sisalto[o.commentid] = o.occurrences

  return sisalto})

  //Tähän uuden parametrin count lisääminen valitut arrayhin sen arvoksi maarat arraystä saman commentid:n parametrin occurrences arvo
  let uus= valitut.map((item) => 
      Object.assign({}, item, {maara:aanetasiat.filter(function(aa) {
        if(aa === null){
          aa=[]
        }
        return aa===item.id}).length
      }))
  /*for(let i=0;i<valitut.length;i++){
    valitut[i].maara=0
    Object.preventExtensions(valitut)
  }*/
  //const maarat = aanetasiat => aanetasiat.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
  console.log(uus)
  console.log(maara)
  if(comment){
    return (
      <div style={stylea}>
        <h3>Kommentit ja taustatiedot</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {uus.map(com => (
              <TableRow key={com.id}>
                <TableCell>
                  {com.commentdatetime}
                </TableCell>
                <TableCell>
                  {com.commenttext} 
                </TableCell>
                <TableCell>{com.maara} ääntä</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
  }else{
    return (
      <li className='comment'>
         Ei kommentteja
      </li>
    )
  }
}

export default Comment