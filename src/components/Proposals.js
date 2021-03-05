import React, { useState}  from 'react'
import { useMutation } from '@apollo/client'
import {
  useParams
} from "react-router-dom"
import { ALL_VOTES, CREATE_VOTING } from '../queries'
import {
  Button
} from '@material-ui/core'

import {useTranslation} from "react-i18next"

const Proposals = ({ proposals, sections, setError, votes }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  // eslint-disable-next-line
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
  // eslint-disable-next-line
  let maarat = Object.values(aanet.reduce((obj, { proposalid }) => {
    if (obj[proposalid] === undefined)
       obj[proposalid] = { proposalid: proposalid, occurrences: 1 };
    else
       obj[proposalid].occurrences++;
    return obj;
 }, {}));
 /*let maara = maarat.map(o => {
  const sisalto = {};

  sisalto[o.proposalid] = o.occurrences
 return sisalto})
*/
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
      <div>
        <h3>{t('common.proposal')}</h3>
        <div width='400px' style={{width:'800'}}>{valittu.map(section => ( <><b>{t('headers.officerproposal')}</b> {section.proposalforadecision} </>))}
        <br /><Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }}id='1' value='1' onClick={() => {if(window.confirm('Haluatko varmasti kannattaa kommenttia?')){uusi('1')}}}>{t('common.vote')}</Button>  {viranaanet.length} {t('common.votes')}</div>
        <br /><br / >
        <b>{t('headers.alternativeproposals')}</b>
        <div style={{width:'800'}}>{uus.map(prop => (
         <>{prop.proposaltext} <br /><Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} onClick={() => {if(window.confirm('Haluatko varmasti kannattaa päätösehdotusta?')){uusi(prop.id)}}}>{t('common.vote')}</Button> {prop.maara} {t('common.votes')} <br /><br /></> ))}</div>
      </div>
    )
  }else{
    return (
      <li className='proposal'>
         {t('common.noalternativeproposals')}
      </li>
    )
  }
}

export default Proposals