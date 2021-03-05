import React, { useState, useEffect, Suspense} from 'react'
import { useQuery, useApolloClient, useSubscription } from '@apollo/client'
import {useTranslation} from "react-i18next"
import Organs from './components/Organs'
import OrganForm from './components/OrganForm'
import Meeting from './components/Meeting'
import Meetings from './components/Meetings'
import MeetingForm from './components/MeetingForm'
import Initiatives from './components/Initiatives'
import Initiativespublic from './components/Initiativespublic'
import Initiative from './components/Initiative'
import InitiativeForm from './components/InitiativeForm'
import PersonForm from './components/PersonForm'
import ProposalForm from './components/ProposalForm'
import UserForm from './components/UserForm'
import Users from './components/Users'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import Organ from './components/Organ'
import CommentForm from './components/CommentForm'
import Comment from './components/Comment'
import Commentpublic from './components/Commentpublic'
import Home from './components/Home'
import Gdpr from './components/Gdpr'
import Proposals from './components/Proposals'
import Proposalspublic from './components/Proposalspublic'
import Municipalities from './components/Municipalities'
import Faq from './components/Faq'
import User from './components/User'
import Header from './components/Header'
import Headerpublic from './components/Headerpublic'
import Headeradmin from './components/Headeradmin'
import Info from './components/Info'
import Termsofuse from './components/Termsofuse'
import Instructions from './components/Instructions'
import Sections from './components/Sections'
import Section from './components/Section'
import Links from './components/Links'
import Linkspublic from './components/Linkspublic'
import LinkForm from './components/LinkForm'
import SectionForm from './components/SectionForm'
import { ALL_ORGANS, ALL_COMMENTS, ALL_USERS, ALL_LINKS, ALL_VOTES, ALL_INITIATIVES, ALL_MUNICIPALITIES, ALL_SECTIONS,  ORGAN_ADDED,  ALL_PROPOSALS, ALL_MEETINGS } from './queries'
import Footer from './components/Footer'
//import background from "./pics/taustapieni_mv.png";
import './App.css'
import WordSection from './components/WordSection'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
//import { MuiThemeProvider, createMuiTheme } from 'material-ui/core/styles'
import {
  Container,
  Button,
  AppBar,
//makeStyles,
//fade
} from '@material-ui/core'
/*import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { Alert } from '@material-ui/lab'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
*/
/*const redTheme = createMuiTheme({ palette: { primary: red } })
const blueTheme = createMuiTheme({ palette: { primary: blue } })
*/
/*
const theme = createMuiTheme({
  palette: {
    primary: 'purple',
    secondary: 'green',
    error: 'red',
  },
})
*/
/*const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

*/

const Notify = ({ errorMessage }) => {
  if ( !errorMessage ) {
    return null
  }

  return (
    <div style={{color: 'red'}}>
      {errorMessage}
    </div>
  )
}

/*function HeaderComponent()
{
  const [t, i18n] = useTranslation('common');
  return <div>
      <h1>{t('welcome.title', {framework:'React'})}</h1>
      <button onClick={() => i18n.changeLanguage('fi')}>fi</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <button onClick={() => i18n.changeLanguage('sv')}>sv</button>
  </div>
}
*/
const App = () => {
  //let loggedin = ''
  const [user, setUser] = useState(null) 
  const [usertype, setUsertype] = useState(null) 
  const [log, setLogout] = useState(null) 

  const login = (user) => {
    setUser(user)
    notify(`tervetuloa ${user}`)
    //setMessage(`tervetuloa ${user}`)
  }

  const [t, i18n] = useTranslation('common')
  
  /**useEffect(() => {
    console.log(usertype)
  }, [usertype])
*/
  /*const padding = {
    padding: 5
  }
 */
  console.log(user)
  //html, body, #app, #app>div {
 /* html, body, #app, #app>div {
    height: 100%
  }*/
  
  const [token, setToken] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null) 
  const organsw = useQuery(ALL_ORGANS, {
    pollInterval: 5000  })

  let organss=[]
  if(organsw.data){
    organss=organsw.data.allOrgans
  }
  const municipalities = useQuery(ALL_MUNICIPALITIES, {
    pollInterval: 5000  })

  let municipalitiess=[]
  if(municipalities.data){
    municipalitiess=municipalities.data.allMunicipalities
  }
  const links = useQuery(ALL_LINKS, {
    pollInterval: 5000  })

  let linkss=[]
  if(links.data){
    linkss=links.data.allLinks
  }
  const users = useQuery(ALL_USERS, {
    pollInterval: 5000  })

  let userss=[]
  if(users.data){
    userss=users.data.allUsers
  }
  const votes = useQuery(ALL_VOTES, {
    pollInterval: 5000  })

  let votess=[]
  if(votes.data){
    votess=votes.data.allVotes
  }
  const initiatives = useQuery(ALL_INITIATIVES, {
    pollInterval: 5000  })

  let initiativess=[]
  if(initiatives.data){
    initiativess=initiatives.data.allInitiatives
  }
  const comments = useQuery(ALL_COMMENTS, {
    pollInterval: 5000  
  })
  const meeetings = useQuery(ALL_MEETINGS, {
    pollInterval: 5000  
  })
  let miitings=[]
  if(meeetings.data){
    miitings=meeetings.data.allMeetings
  }
  const sectionss = useQuery(ALL_SECTIONS, {
    pollInterval: 5000  
  })
  let sectionsss=[]
  if(sectionss.data){
    sectionsss=sectionss.data.allSections
  }
  let komments=[]
  if(comments.data){
    komments=comments.data.allComments
  }
  const proposals = useQuery(ALL_PROPOSALS, {
    pollInterval: 5000  
  })
  let proposal=[]
  if(proposals.data){
    console.log(proposals.data.allProposals)
    proposal=proposals.data.allProposals
  }
  const client = useApolloClient()
  //const results= Object.values(organs.data)
  //console.log(organs.data.allOrgans)

  const updateCacheWith = (addedOrgan) => {
    const includedIn = (set, object) => 
      set.map(p => p.id).includes(object.id)  

    const dataInStore = client.readQuery({ query: ALL_ORGANS })
    if (!includedIn(dataInStore.allOrgans, addedOrgan)) {
      client.writeQuery({
        query: ALL_ORGANS,
        data: { allOrgans : dataInStore.allOrgans.concat(addedOrgan) }
      })
    }   
  }

  useSubscription(ORGAN_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      const addedOrgan = subscriptionData.data.organAdded
      notify(`${addedOrgan.name} added`)
      updateCacheWith(addedOrgan)
    }
  })

  useEffect(() => {
    const token = localStorage.getItem('daas-user-token')
    if ( token ) {
      setToken(token)
    }
    const useri = localStorage.getItem('usertype')
    if ( useri) {
      setUsertype(useri)
    }
    const email = localStorage.getItem('email')
    if(email){
      setUser(localStorage.getItem('email'))
    }
  }, [])
    
  if (organsw.loading)  {
    return <div>ladataan...</div>
  }


  


  /*const logout = () => {
    setToken(null)
    localStorage.clear()
    client.resetStore()
    setUsertype(null)
  }
*/
  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }
  /*const match = useRouteMatch('/agendas/:id')
  const agenda = match 
    ? agendas.find(agenda => agenda.id === Number(match.params.id))
    : null
*/
/***
 * <div height='80%' style={{ backgroundImage: `url(${background})` }}>
        <Notify errorMessage={errorMessage} />
        <h2>Login</h2>
        <LoginForm
          setToken={setToken}
          setError={notify}
        />
      </div>
 */
  /**
   * 
   * <div className="fill-window" id='all'  style={{ 
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        width:'100%',
        height: '100%', 
        position: 'absolute', 
        left: '0px',
        backgroundAttachment: 'fixed'
      }}>
   */
  if (!token) {
    return (
      <Suspense fallback="loading">
      <div className="fill-window" id='all'  style={{ 
        width:'100%',
        height: '100%', 
        position: 'absolute', 
        left: '0px'
      }}>
      <Container>
        <Router>
          <AppBar position="static">
            <Headerpublic />
            <div align='bottom' position='fixed' style={{right:'0px', height:'55px', backgroundColor: "#C4DFE6", color:"#C4DFE6"}}></div>
            <div  style={{right:'0px', position: 'fixed', top:'65px', bottom: 0,  height:'20px', backgroundColor: "#C4DFE6", color:"#C4DFE6" }} height='20px' position align='right'>
              <Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit" onClick={() => i18n.changeLanguage('fi')}>fi</Button>
              <Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit"  onClick={() => i18n.changeLanguage('en')}>en</Button>
              <Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit"  onClick={() => i18n.changeLanguage('sv')}>sv</Button>
            </div>
          </AppBar>
          <br />
          <Notify errorMessage={errorMessage} />
          <Switch>
            <Route path="/home">
              <Home />
              <Municipalities municipalities={municipalitiess} />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/agendas/:id">
              <Sections sections={sectionsss} meetings={miitings}  />
            </Route>
            <Route path="/organs/:chosenmunicipal">
              <Organ organs={organss}  />
            </Route>
            <Route path="/organs">
              <Organs organs={organss}/>
            </Route>
            <Route path="/sections/:id">
              <Section sections={sectionsss}  />
              <br />
              <Proposalspublic setError={notify} proposals={proposal} sections={sectionsss} votes={votess} />
              <br />
              <Commentpublic setError={notify} comment={komments} sections={sectionsss} votes={votess} />
              <br />
              <Linkspublic setError={notify} links={linkss} sections={sectionsss} votes={votess} />
              <br />
            </Route>
            <Route path="/sections">
              <Sections sections={sectionsss} meeting={miitings}  />
            </Route>
            <Route path="/factcomments">
              <Commentpublic comment={komments} votes={votess} />
              <Linkspublic links={linkss} votes={votess} />
            </Route>
            <Route path="/meetings/:chosenorgan">
              <Meeting meeting={miitings}  />
            </Route>
            <Route path="/meetings">
              <Meetings meeting={miitings} />
            </Route>
            <Route path="/comments/:id">
              <Commentpublic comment={organsw}  votes={votess}  />
            </Route>
            <Route path="/links/:id">
              <Linkspublic links={linkss}  votes={votess}  />
            </Route>
            <Route path="/proposals">
              <Proposalspublic proposals={proposal}  votes={votess} />
            </Route>
            <Route path="/initiatives/:id">
              <Initiative initiatives={initiativess} />
            </Route>
            <Route path="/initiatives">
              <Initiativespublic setError={notify} votes={votess} initiatives={initiativess} />
            </Route>
            <Route path="/votes">
              <Proposalspublic proposals={proposal}  votes={votess} />
              <Commentpublic setError={notify} comment={komments} sections={sectionsss} votes={votess} />
              <Initiativespublic setError={notify} votes={votess}  initiatives={initiativess} />
              <Linkspublic setError={notify} votes={votess}  links={linkss} />
            </Route>
            <Route path="/gdpr">
              <Gdpr />
            </Route>
            <Route path="/municipalities">
              <Municipalities municipalities={municipalitiess} />
            </Route>
            <Route path="/municipalities/:id">
              <Organs municipalities={municipalitiess} />
            </Route>
            <Route path="/info">
              <Info  />
            </Route>
            <Route path="/termsofuse">
              <Termsofuse   />
            </Route>
            <Route path="/instructions">
              <Instructions   />
            </Route>
            <Route path="/login">
              {(token) ? <Redirect to="/" /> : <LoginForm setUsertype={setUsertype} onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={0} setToken={setToken} client={client}/>
              }
            </Route>
            <Route path="/login/:id">
              {(log !== null) ? <Redirect to="/" /> : <LoginForm setUsertype={setUsertype} onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={1} setToken={setToken} client={client}/>
              }
            </Route>
            <Route path="/logout">
              {(log !== null) ? <Redirect to="/" /> : <Logout setUsertype={setUsertype}  onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={1} setToken={setToken} client={client}/>
            }  
            </Route>
            <Route path="/">
              <Home   />
              <Municipalities municipalities={municipalitiess}   />
              <br /><br />
              <WordSection />
            </Route>
          </Switch>
          <br /><br /><br /><br />
          <Footer/>
        </Router>
      </Container>
      </div>
      </Suspense>
    )
  }
// <Organs organs={result.data.allOrgans} />
  /*const stylea = {
    backgroundImage: `url(${background})`,
    min-height: 200px
  }
*/

//backgroundPosition:absolute 0 0;
//           {(log === null) ? <Redirect to="/login" /> : <LoginForm onLogin={login} setLogout={setLogout} logout={1} setToken={setToken} client={client}/>}
if (usertype==='3') {    
  return (
    <Suspense fallback="loading">
        <div className="fill-window" id='all'  style={{ 
        width:'100%',
        height: '100%', 
        position: 'absolute', 
        left: '0px'
      }}>
    
    <Container>
      <Router>
        <AppBar position="static">
            <Headeradmin />
            <div align='bottom' position='fixed' style={{right:'0px', height:'55px', backgroundColor: "#C4DFE6", color:"#C4DFE6"}}></div>
            <div  style={{right:'0px', position: 'fixed', top:'65px', bottom: 0,  height:'20px', backgroundColor: "#C4DFE6", color:"#C4DFE6" }} height='20px' position align='right'><Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit" onClick={() => i18n.changeLanguage('fi')}>fi</Button>
      <Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit"  onClick={() => i18n.changeLanguage('en')}>en</Button>
      <Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit"  onClick={() => i18n.changeLanguage('sv')}>sv</Button>
      </div>
        </AppBar>
        <br />
        <Notify errorMessage={errorMessage} />
        <Switch>
          <Route path="/home">
            <Home />
            <Municipalities municipalities={municipalitiess} />
          </Route>
          <Route path="/faq">
              <Faq />
            </Route>
          <Route path="/agendas/:id">
            <Sections sections={sectionsss} meetings={miitings}  />
            <SectionForm setError={notify} sections={sectionsss} />
          </Route>
          <Route path="/organs/:chosenmunicipal">
            <Organ organs={organss}  />
            <OrganForm setError={notify} organs={organss} />
          </Route>
          <Route path="/organs">
            <Organs organs={organss}/>
            <OrganForm setError={notify} organs={organss}  />
          </Route>
          <Route path="/sections/:id">
            <Section sections={sectionsss}  />
            <br />
            <Proposals setError={notify} proposals={proposal} sections={sectionsss} votes={votess} />
            <br />
            <ProposalForm setError={notify}  />
            <br />
            <Comment setError={notify} comment={komments} sections={sectionsss} votes={votess} />
            <br />
            <CommentForm setError={notify} />
            <br />
            <Links setError={notify} links={linkss} sections={sectionsss} votes={votess} />
            <br />
            <LinkForm setError={notify} />
          </Route>
          <Route path="/sections">
            <Sections sections={sectionsss} meeting={miitings}  />
            <SectionForm setError={notify} sections={sectionsss} />
          </Route>
          <Route path="/factcomments">
            <Comment comment={komments} votes={votess} />
            <CommentForm setError={notify}  />
          </Route>
          <Route path="/meetings/:chosenorgan">
            <Meeting meeting={miitings}  />
            <MeetingForm setError={notify} />
          </Route>
          <Route path="/meetings">
            <Meetings meeting={miitings} />
            <MeetingForm setError={notify} />
          </Route>
          <Route path="/testi">
            <PersonForm setError={notify} />
          </Route>
          <Route path="/comments/:id">
            <Comment comment={organsw}  votes={votess}  />
          </Route>
          <Route path="/proposals">
            <Proposals proposals={proposal}  votes={votess} />
            <ProposalForm setError={notify} proposals={proposal} />
          </Route>
          <Route path="/initiatives/:id">
            <Initiative initiatives={initiativess} />
          </Route>
          <Route path="/initiatives">
            <Initiatives setError={notify} votes={votess} initiatives={initiativess} />
            <InitiativeForm setError={notify} proposals={proposal} />
          </Route>
          <Route path="/votes">
            <Proposals proposals={proposal}  votes={votess} />
            <Comment setError={notify} comment={komments} sections={sectionsss} votes={votess} />
            <Initiatives setError={notify} votes={votess}  initiatives={initiativess} />
            <br />
            <Links setError={notify} links={linkss} sections={sectionsss} votes={votess} />
          </Route>
          <Route path="/gdpr">
            <Gdpr />
          </Route>
          <Route path="/municipalities">
            <Municipalities municipalities={municipalitiess} />
          </Route>
          <Route path="/municipalities/:id">
            <Organs municipalities={municipalitiess} />
          </Route>
          <Route path="/users">
            <Users users={userss}   />
            <UserForm setError={notify} />
           </Route>
          <Route path="/info">
            <Info  />
          </Route>
          <Route path="/account">
            <User  user={user} setError={notify}  />
          </Route>
          <Route path="/termsofuse">
            <Termsofuse   />
          </Route>
          <Route path="/instructions">
            <Instructions   />
          </Route>
          <Route path="/login">
            <LoginForm setUsertype={setUsertype} onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={0} setToken={setToken} client={client}/>
          </Route>
          <Route path="/login/:id">
            {(log !== null) ? <Redirect to="/" /> : <LoginForm setUsertype={setUsertype}  onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={1} setToken={setToken} client={client}/>
            }
          </Route>
          <Route path="/logout">
            {(log !== null) ? <Redirect to="/" /> : <Logout setUsertype={setUsertype} onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={1} setToken={setToken} client={client}/>
          }  
          </Route>
          <Route path="/">
            <Home   />
            <Municipalities municipalities={municipalitiess}   />
            <br /><br />
            <WordSection />
          </Route>
        </Switch>
        <br /><br /><br /><br />
        <Footer/>
      </Router>
    </Container>
    </div>
    </Suspense>
  )
  }
  return (
    <Suspense fallback="loading">
    <div className="fill-window" id='all'  style={{ 
        width:'100%',
        height: '100%', 
        position: 'absolute', 
        left: '0px'
      }}>
<Container>
  <Router>
    <AppBar position="static">
      <Header />
      <div align='bottom' position='fixed' style={{right:'0px', height:'55px', backgroundColor: "#C4DFE6", color:"#C4DFE6"}}></div>
          <div  style={{right:'0px', position: 'fixed', top:'65px', bottom: 0,  height:'20px', backgroundColor: "#C4DFE6", color:"#C4DFE6" }} height='20px' position align='right'>
          <Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit" onClick={() => i18n.changeLanguage('fi')}>fi</Button>
          <Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit"  onClick={() => i18n.changeLanguage('en')}>en</Button>
          <Button style={{height:'20px', backgroundColor: "#003B46", color:"#C4DFE6",fontSize: "14px" }} size='small' color="primary" color="inherit"  onClick={() => i18n.changeLanguage('sv')}>sv</Button>
      </div>
    </AppBar>
    <br />
    <Notify errorMessage={errorMessage} />
    <Switch>
      <Route path="/home">
        <Home />
        <Municipalities municipalities={municipalitiess} />
        <WordSection />
      </Route>
      <Route path="/faq">
        <Faq />
      </Route>
      <Route path="/agendas/:id">
        <Sections sections={sectionsss} meetings={miitings}  />
        <SectionForm setError={notify} sections={sectionsss} />
      </Route>
      <Route path="/organs/:chosenmunicipal">
        <Organ organs={organss}  />
        <OrganForm setError={notify} organs={organss} />
      </Route>
      <Route path="/organs">
        <Organs organs={organss}/>
      </Route>
      <Route path="/sections/:id">
        <Section sections={sectionsss}  />
        <br />
        <Proposals setError={notify} proposals={proposal} sections={sectionsss} votes={votess} />
        <br />
        <ProposalForm setError={notify}  />
        <br />
        <Comment setError={notify} comment={komments} sections={sectionsss} votes={votess} />
        <br />
        <CommentForm setError={notify} />
        <br />
        <Links setError={notify} links={linkss} sections={sectionsss} votes={votess} />
        <br />
        <LinkForm setError={notify} />
      </Route>
      <Route path="/sections">
        <Sections sections={sectionsss} meeting={miitings}  />
      </Route>
      <Route path="/factcomments">
        <Comment comment={komments} votes={votess} />
        <CommentForm setError={notify}  />
      </Route>
      <Route path="/meetings/:chosenorgan">
        <Meeting meeting={miitings}  />
      </Route>
      <Route path="/meetings">
        <Meetings meeting={miitings} />
      </Route>
      <Route path="/testi">
        <PersonForm setError={notify} />
      </Route>
      <Route path="/comments/:id">
        <Comment comment={organsw}  votes={votess}  />
      </Route>
      <Route path="/proposals">
        <Proposals proposals={proposal}  votes={votess} />
        <ProposalForm setError={notify} proposals={proposal} />
      </Route>
      <Route path="/initiatives/:id">
        <Initiative initiatives={initiativess} />
      </Route>
      <Route path="/initiatives">
        <Initiatives setError={notify} votes={votess} initiatives={initiativess} />
        <InitiativeForm setError={notify} proposals={proposal} />
      </Route>
      <Route path="/votes">
        <Proposals proposals={proposal}  votes={votess} />
        <Comment setError={notify} comment={komments} sections={sectionsss} votes={votess} />
        <Initiatives setError={notify} votes={votess}  initiatives={initiativess} />
        <br />
        <Links setError={notify} links={linkss} sections={sectionsss} votes={votess} />
      </Route>
      <Route path="/gdpr">
        <Gdpr />
      </Route>
      <Route path="/municipalities">
        <Municipalities municipalities={municipalitiess} />
      </Route>
      <Route path="/municipalities/:id">
        <Organs municipalities={municipalitiess} />
      </Route>
      <Route path="/info">
        <Info  />
      </Route>
      <Route path="/account">
        <User  user={user} setError={notify} />
      </Route>
      <Route path="/termsofuse">
        <Termsofuse   />
      </Route>
      <Route path="/instructions">
        <Instructions   />
      </Route>
      <Route path="/login">
        <LoginForm setUsertype={setUsertype} onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={0} setToken={setToken} client={client}/>
      </Route>
      <Route path="/login/:id">
        {(log !== null) ? <Redirect to="/" /> : <LoginForm setUsertype={setUsertype}  onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={1} setToken={setToken} client={client}/>
        }
      </Route>
      <Route path="/logout">
        {(log !== null) ? <Redirect to="/" /> : <Logout setUsertype={setUsertype} onLogin={login} setError={notify} log={log} setLogout={setLogout} logout={1} setToken={setToken} client={client}/>
      }  
      </Route>
      <Route path="/">
        <Home   />
       
        <Municipalities municipalities={municipalitiess}   />
        <br /><br />
        <WordSection />
      </Route>
    </Switch>
    <br />
    <br /><br /><br />
    <Footer/>
  </Router>
</Container>
</div>
</Suspense>
)
}

export default App