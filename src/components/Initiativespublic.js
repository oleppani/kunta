import React, { useState, useEffect}  from 'react'
import { useMutation } from '@apollo/client'
import { ALL_VOTES, CREATE_VOTING } from '../queries'
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


const stylea = {
  background: 'white',
  opacity: 0.9
}
const Initiatives = ({initiatives, setError, votes}) => {
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



  let sectionss=''
 /* sectionss = useParams().id
 
  let valittu = sections.filter(function(el) {
    return el.id===sectionss
  })
  console.log(proposals)
  let valitut = proposals.filter(function(el) {
    return el.sectionid===sectionss
  })
 */
  let aanet= votes.filter(function(aa) {
    let paluu=[]
    if(aa.initiativeid){
      paluu=aa.initiativeid.length>0
    }
    return paluu
  } )
  

  let aanetasiat= aanet.map(p => p.initiativeid)
  let maarat = Object.values(aanet.reduce((obj, { initiativeid }) => {
    if (obj[initiativeid] === undefined)
       obj[initiativeid] = { initiativeid: initiativeid, occurrences: 1 };
    else
       obj[initiativeid].occurrences++;
    return obj;
 }, {}));
 let maara = maarat.map(o => {
  const sisalto = {};

  sisalto[o.initiativeid] = o.occurrences
 return sisalto})

  //Tähän uuden parametrin count lisääminen valitut arrayhin sen arvoksi maarat arraystä saman commentid:n parametrin occurrences arvo
  let uus = initiatives.map((item) => 
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

  return(

  <div style={stylea}>
    <h2>Aloitteet</h2>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {uus.map(ini => (
            <TableRow key={ini.id}>
              <TableCell>
                <Link to={`/initiatives/${ini.id}`}>{ini.initiativetext}</Link>
              </TableCell>
              <TableCell>
                {ini.organid}
              </TableCell>
              <TableCell>{ini.maara} ääntä</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>
)
}

export default Initiatives