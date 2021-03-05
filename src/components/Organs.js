import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import {
  Link
} from "react-router-dom"

import {
  Button
} from '@material-ui/core'
import { FIND_ORGAN } from '../queries'
import {useTranslation} from "react-i18next"

const Organs = ({ organs }) => {
  const [organ, setOrgan] = useState(null)
  // eslint-disable-next-line
  const [getOrgan, result] = useLazyQuery(FIND_ORGAN)
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  /*const showOrgan = (name) => {
    getOrgan({ variables: { nameToSearch: name } })
  }
*/
  useEffect(() => {
    if (result.data) {
      setOrgan(result.data.findOrgan)
    }
  }, [result.data])
//<div style={stylea}>
  if (organ) {
    return(
      <div>
        <h2>{organ.organmunicipality}</h2>
        <div>{organ.organsname} {organ.organshort}</div>
        <button onClick={() => setOrgan(null)}>{t('common.close')}</button>
      </div>
    )
  }
  
  return (
    <div>
      <h2>{t('headers.organs')}</h2>
      {organs.map(p =>
        <Button variant="contained" size='normal' color="inherit" component={Link} to={`/meetings/${p.organname}`}>
         {p.organname}
       </Button> 
      )}

    </div>
  )
}

export default Organs