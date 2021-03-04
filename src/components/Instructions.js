import React from 'react'
import {useTranslation} from "react-i18next"
/*
import {useTranslation} from "react-i18next"
const [t, i18n] = useTranslation('common')
{t('headers.agendas')}

*/
const stylea = {
  background: 'white',
  opacity: 0.9
}
const Instructions = () => {
  const [t, i18n] = useTranslation('common')
  return (
  <div> 
    
    <h2>{t('instructions.header')}</h2> 
    <div>
    {t('instructions.text')}
      <h3>{t('instructions.registrationheader')}</h3>{t('instructions.registration')}
      <h3>{t('instructions.accountheader')}</h3>{t('instructions.account')}
      <h3>{t('instructions.usertypesheader')}</h3>{t('instructions.usertypes')}
      <h3>{t('instructions.usersheader')}</h3>{t('instructions.users')}
      <h3>{t('instructions.menuheader')}</h3>{t('instructions.menu')}
      <h3>{t('instructions.navigationheader')}</h3>{t('instructions.navigation')}
      <h3>{t('instructions.responsiveviewheader')}</h3>{t('instructions.responsiveview')}
      <h3>{t('instructions.municipalitiesheader')}</h3>{t('instructions.municipalities')}
      <h3>{t('instructions.institutionsheader')}</h3>{t('instructions.institutions')}
      <h3>{t('instructions.meetingsheader')}</h3>{t('instructions.meetings')}
      <h3>{t('instructions.sectionsheader')}</h3>{t('instructions.sections')}
      <h3>{t('instructions.proposalsheader')}</h3>{t('instructions.proposals')}
      <h3>{t('instructions.commentsheader')}</h3>{t('instructions.comments')}
      <h3>{t('instructions.linksheader')}</h3>{t('instructions.links')}
      <h3>{t('instructions.contactheader')}</h3>{t('instructions.contact')}
      <h3>{t('instructions.privacyheader')}</h3>{t('instructions.privacy')}
      <br />
      <br />
      </div>
  </div>
)
  }
export default Instructions