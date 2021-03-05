import React from 'react'
import {useTranslation} from "react-i18next"

const Faq = () => {
  // eslint-disable-next-line
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