import React from 'react'
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

import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { Alert } from '@material-ui/lab'
import { NoteTwoTone } from '@material-ui/icons'

const stylea = {
  background: 'white',
  opacity: 0.9
}
const Meetings = ({ meeting, toggleImportance }) => {
  const label = meeting.important
    ? 'make not important' : 'make important'

    const aani = async (event) => {
      alert("Kannatit kommenttia");
    }
  
    
  console.log(meeting)
  
  if(meeting){
    return (
      
      <ul>
            {meeting.map(meet => (
              <li>
                  <Link to={`/agendas/${meet.id}`}>{meet.organid} </Link> {meet.meetingtext} {meet.meetingmunicipality}
               </li>
            ))}
      </ul>
    )
  }else{
    return (
      <li className='meeting'>
         Ei kokouksia
      </li>
    )
  }
}

export default Meetings