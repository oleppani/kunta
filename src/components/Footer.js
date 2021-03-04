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
import {useTranslation} from "react-i18next"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom"
const Footer = () => {
  const [t, i18n] = useTranslation('common')
  const footerStyle = {
    color: 'grey',
    fontStyle: 'italic',
    fontSize: 16,
    opacity: 0.9,
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%'
  }
 

  return (
    <div style={footerStyle}>
    <table bgcolor='#07575B' width='100%'>
      <tbody>
      <tr><td><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit" component={Link} to="/gdpr">
      {t('footer.first')}
          </Button></td><td><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit" component={Link} to="/termsofuse">
          {t('footer.second')}
          </Button></td>
          <td><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit" component={Link} to="/instructions">
          {t('footer.third')}
          </Button></td>
          <td><Button style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit" component={Link} to="/faq">
          {t('footer.fourth')}
          </Button></td><td> <font size='2' >&copy; Osmo Leppäniemi</font></td></tr>
          </tbody>
    </table>
    </div>
  )
}

export default Footer