import React from 'react'

import {
  useParams
} from "react-router-dom"
import {useTranslation} from "react-i18next"
/*
import {useTranslation} from "react-i18next"
const [t, i18n] = useTranslation('common')
{t('headers.agendas')}

*/

const Section = ({sections}) => {
  const asia = useParams().id
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  let valittu = sections.filter(function(el) {
    return el.id===asia
  })

  
 let valitut={casetext: 'ladataan...', preparer:'ladataan...', caseid:'ladataan...',proposalforadecision:'ladataan...',x:'ladataan...',y:'ladataan...',z:'ladataan...',address:'ladataan...',postnumber:'ladataan...',postoffice:'ladataan...',country:'ladataan...',attachments:'ladataan...',sectionmunicipality:'ladataan...',agendaid:'ladataan...'}
 if(valittu[0]){
  valitut = valittu[0]
  console.log(valitut)
 }
 console.log(valitut)
  /*let valitut={}
  valittu[0]
  console.log(valittu[0])
  */
  return(
  <div>
    <h2>{valitut.casetext}</h2><br />
    <b>{t('common.preparer')}</b> {valitut.preparer}<br />
    <b>{t('common.sectionnumber')}</b> {valitut.caseid}<br />
    <b>{t('common.proposal')}</b> {valitut.proposalforadecision}<br />
    <b>X:</b> {valitut.x}<br />
    <b>Y:</b> {valitut.y}<br />
    <b>Z:</b> {valitut.z}<br />
    <b>{t('common.address')}</b> {valitut.address}<br />
    <b>{t('common.postnumber')}</b> {valitut.postnumber}<br />
    <b>{t('common.postoffice')}</b> {valitut.postoffice}<br />
    <b>{t('common.country')}</b> {valitut.country}<br />
    <b>{t('common.attachments')}</b> {valitut.attachments}<br />
    <b>{t('common.municipal')}</b> {valitut.sectionmunicipality}<br />
    <b>{t('common.agenda')}</b> {valitut.agendaid}<br />
    
  </div>
)
}

export default Section