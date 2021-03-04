import React from 'react'

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
import {useTranslation} from "react-i18next"

const stylea = {
  background: 'white',
  opacity: 0.9
}

const Sections = ({sections, meetings}) => {
  const [t, i18n] = useTranslation('common')
  let agenda=''
  agenda = useParams().id
  let meet=[]
  if(agenda){
    meet= meetings.filter(function(el) {
      return el.id===agenda
    })
  }
  
  //console.log(meet)
  if(agenda){
      let valittu = sections.filter(function(el) {
        return el.agendaid===agenda
      })
      return(
      <div>
        {meet.map(p => (
        <h3>{t('headers.sectionsinmeeting')} {p.organid} {p.meetingtext}</h3>
        ))}
        <ul>
              {valittu.map(section => (
                 <li>
                    <Link to={`/sections/${section.id}`}>{section.casetext}</Link>
                  </li>
              ))}
        </ul>
      </div>
    )
    }else{
      return(
        <div>
          {meet.map(p => (
          <h3>{t('headers.sectionsinmeeting')} {p.organid} {p.meetingtext}</h3>
          ))}
          <ul>
            
                {sections.map(section => (
                  <li>
                      <Link to={`/sections/${section.id}`}>{section.casetext}</Link>
                 </li>
                ))}
          </ul>      
        </div>
      )
    }
}

export default Sections