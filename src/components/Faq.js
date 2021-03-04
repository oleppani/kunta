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
const Faq = () => {
  const [t, i18n] = useTranslation('common')
  return (
  <div> 
    
    <h2>{t('faq.header')}</h2> 
    <div>
    {t('faq.text')}
     <br />
      <br />
      </div>
  </div>
)
  }
export default Faq