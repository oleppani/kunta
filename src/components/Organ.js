import React from 'react'
import {
  Link,
  useParams
} from "react-router-dom"
import {
  Button
} from '@material-ui/core'
import {useTranslation} from "react-i18next"


const Organ = ({ organs }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  //const [organ, setOrgan] = useState(null)
  //const [getOrgan, result] = useLazyQuery(FIND_ORGAN)
  let munic=useParams().chosenmunicipal
  /*const showOrgan = (name) => {
    getOrgan({ variables: { nameToSearch: name } })
  }
  /*

  /*useEffect(() => {
    if (result.data) {
      setOrgan(result.data.findOrgan)
    }
  }, [result.data])
*/
  /*if (organ) {
    return(
      <div>
        <h2>{organ.name}</h2>
        <div>{organ.address.street} {organ.address.city}</div>
        <div>{organ.phone}</div>
        <button onClick={() => setOrgan(null)}>close</button>
      </div>
    )
  }
  */

  let valittu = organs.filter(function(el) {
    return el.organmunicipality===munic
  })
  //console.log(valittu)
  return (
    <div>
      <h2>{t('headers.organs')}</h2>
      {valittu.map(p =>
         <Button variant="contained" size='normal' color="inherit" component={Link} to={`/meetings/${p.organname}`}>
         {p.organname}
       </Button>
      )}

    </div>
  )
}

export default Organ