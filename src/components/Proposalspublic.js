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

const stylea = {
  background: 'white',
  opacity: 0.9
}
const Proposals = ({ proposals, sections, setError, votes }) => {

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


  let sectionss=''
  sectionss = useParams().id
  let valittu = sections.filter(function(el) {
    return el.id===sectionss
  })
  console.log(proposals)
  let valitut = proposals.filter(function(el) {
    return el.sectionid===sectionss
  })
  
  let aanet= votes.filter(function(aa) {
    return aa.sectionid===sectionss
  } )
  let aanetasiat= aanet.map(p => p.proposalid)
  let maarat = Object.values(aanet.reduce((obj, { proposalid }) => {
    if (obj[proposalid] === undefined)
       obj[proposalid] = { proposalid: proposalid, occurrences: 1 };
    else
       obj[proposalid].occurrences++;
    return obj;
 }, {}));
 let maara = maarat.map(o => {
  const sisalto = {};

  sisalto[o.proposalid] = o.occurrences
 return sisalto})

  //Tähän uuden parametrin count lisääminen valitut arrayhin sen arvoksi maarat arraystä saman commentid:n parametrin occurrences arvo
  let uus = valitut.map((item) => 
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
  console.log(aanetasiat)

  let viranaanet = aanetasiat.filter(function(dd){
    return dd==='1'}
  )
  console.log(viranaanet)
  //let proposals =[]
  if(proposals){
    return (
      <div style={stylea}>
        <h3>Päätösesitykset</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow key='1'>
                {valittu.map(section => ( <TableCell><b>Viranhaltijan päätösesitys:</b> {section.proposalforadecision}       
              </TableCell>))}
              <TableCell></TableCell>
              <TableCell>{viranaanet.length} ääntä</TableCell>
            </TableRow>
            <TableRow key='2'>
              <TableCell>
                <b>Vaihtoehtoiset päätösesitykset:</b>
              </TableCell>
            </TableRow>
            {uus.map(prop => (
              <TableRow key={prop.id}>
                <TableCell>
                  {prop.proposaldatetime}
                </TableCell>
                <TableCell>
                  {prop.proposaltext} 
                </TableCell>
                <TableCell>{prop.maara} ääntä</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
  }else{
    return (
      <li className='proposal'>
         Ei vaihtoehtoisia päätösehdotuksia
      </li>
    )
  }
}

export default Proposals