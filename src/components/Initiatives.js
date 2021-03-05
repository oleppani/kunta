import React, { useState }  from 'react'
import { useMutation } from '@apollo/client'
import { ALL_VOTES, CREATE_VOTING } from '../queries'
import {
  Link
} from "react-router-dom"
import {
  Button,
  

} from '@material-ui/core'

import {useTranslation} from "react-i18next"


const Initiatives = ({initiatives, setError, votes}) => {
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
      variables: { initiativeid:event, userid: userid.length > 0 ? userid : 'tyhjä', votedatetime:pvm.toString(), sectionid:sectionss }
     })
 
  }


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
  // eslint-disable-next-line
  let maarat = Object.values(aanet.reduce((obj, { initiativeid }) => {
    if (obj[initiativeid] === undefined)
       obj[initiativeid] = { initiativeid: initiativeid, occurrences: 1 };
    else
       obj[initiativeid].occurrences++;
    return obj;
 }, {}));
 /*let maara = maarat.map(o => {
  const sisalto = {};

  sisalto[o.initiativeid] = o.occurrences
 return sisalto})
*/
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

  <div>
    <h2>{t('headers.initiatives')}</h2>
         <div> {uus.map(ini => (
                <><Link to={`/initiatives/${ini.id}`}>{ini.initiativetext}</Link> {ini.organid}
              <br /><Button variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6", fontSize: "14px" }} onClick={() => {if(window.confirm('Haluatko varmasti kannattaa aloitetta?')){uusi(ini.id)}}}>{t('common.vote')}</Button> {ini.maara} {t('common.votes')}
              <br /><br /> </>
          ))}
          </div>
  </div>
)
}

export default Initiatives