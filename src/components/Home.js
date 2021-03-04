import React from 'react'
import {useTranslation} from "react-i18next"
const stylea = {
  background: 'white',
  opacity: 0.9
}

const Home = () => {
  const [t, i18n] = useTranslation('common')
  return(
  <div> 
    <h2>{t('welcome.title', {framework:'React'})}</h2> 
    <p>{t('welcome.text', {framework:'React'})}</p> 
  </div>
)
}
export default Home