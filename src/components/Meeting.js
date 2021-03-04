import React from 'react'
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

const stylea = {
  background: 'white',
  opacity: 0.9
}

const Meeting = ({ meeting, toggleImportance }) => {
  const label = meeting.important
    ? 'make not important' : 'make important'
    
    const aani = async (event) => {
      alert("Kannatit kommenttia");
    }
  let organ=useParams().chosenorgan
  let valittu = meeting.filter(function(el) {
    return el.organid===organ
  })
  //console.log(comment.data)
  //let comments =[]
  if(meeting){
    return (
      <div>
        <br /><br />
        {valittu.map(p =>
        <Button variant="contained" size='medium' color="inherit" component={Link} to={`/agendas/${p.id}`}>
          {p.meetingtext} {p.organid}
        </Button>
        )}
      </div>
      )
    
  }else{
    return (
      <li className='meeting'>
         Ei kokouksia
      </li>
    )
  }
}

export default Meeting