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
const Gdpr = () => {
  const [t, i18n] = useTranslation('common')
  return (
  <div> 
    
    <h2>{t('dataprotection.header')}</h2> 
    <div><h3>{t('dataprotection.registerholderheader')}</h3>
    {t('dataprotection.registerholdertext')}
      <h3>{t('dataprotection.registernameheader')}</h3>{t('dataprotection.registernametext')}
      <h3>{t('dataprotection.registerformheader')}</h3>{t('dataprotection.registerformtext')}
      <h3>{t('dataprotection.registerusageheader')}</h3>{t('dataprotection.registerusagetext')}
      <h3>{t('dataprotection.registercontainsheader')}</h3>{t('dataprotection.registercontainstext')}
      <h3>{t('dataprotection.registersourceheader')}</h3>{t('dataprotection.registersourcetext')}
      <h3>{t('dataprotection.registerinfotransferheader')}</h3>{t('dataprotection.registerinfotransfertext')}
      <h3>{t('dataprotection.savingtimesheader')}</h3>{t('dataprotection.savingtimestext')}
      <h3>{t('dataprotection.automateddecisionsheader')}</h3>{t('dataprotection.automateddecisionstext')}
      <h3>{t('dataprotection.protectionheader')}</h3>{t('dataprotection.protectiontext')}
      <h3>{t('dataprotection.rightofinspectionheader')}</h3>{t('dataprotection.rightofinspectiontext')}
      <h3>{t('dataprotection.rightoffixinfosheader')}</h3>{t('dataprotection.rightoffixinfostext')}
      <h3>{t('dataprotection.otherrightsforpersonalinfosheader')}</h3>{t('dataprotection.otherrightsforpersonalinfostext')}
      <h3>{t('dataprotection.rightofappealheader')}</h3>{t('dataprotection.rightofappealtext')}
      <br />
      <br />
      </div>
  </div>
)
  }
export default Gdpr