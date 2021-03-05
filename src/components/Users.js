import React  from 'react'
import {useTranslation} from "react-i18next"


const Users = ({ users, sections, setError, votes }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  //const [userid, setUserid] = useState('')  

  /*const [ createVoting ] = useMutation(CREATE_VOTING, {
    refetchQueries: [  {query: ALL_VOTES} ],
    onError: (error) => {
      
      //setError(error.graphQLErrors[0].message)
      setError('virhe')
    },
    /*update: (store, response) => {
      updateCacheWith(response.data.addComment)
    }*/
  //})
 /* const uusi = async (event) => {
    console.log(event)
    const aika = Date.now()
    const pvm = new Date(aika)
    createVoting({
      variables: { proposalid:event, userid: userid.length > 0 ? userid : 'tyhjä', votedatetime:pvm.toString(), sectionid:sectionss }
     })
 
  }
*/

  //let sectionss=1
  /*sectionss = useParams().id
  let valittu = sections.filter(function(el) {
    return el.id===sectionss
  })*/
 /* console.log(users)
  let valitut = users.filter(function(el) {
    return el.sectionid===sectionss
  })
  */
  //let users =[]
  console.log(users)
  if(users){
    return (
      <div>
        <h3>{t('headers.users')}</h3>
        {users.map(prop => (
            <div>
              <p><b>{t('common.name')}</b> {prop.name}<br />
                <b>{t('common.email')}</b> {prop.email}<br />
                <b>{t('common.address')}</b> {prop.address} <br />
                <b>{t('common.postnumber')}</b> {prop.postnumber}<br />
                <b>{t('common.postoffice')}</b> {prop.postoffice}<br />
                <b>{t('common.phone')}</b> {prop.phone}<br />
                <b>{t('common.active')}</b> {prop.activated}<br />
                <b>{t('common.usertype')}</b> {prop.type}<br />
            </p>
            </div>   
            ))}
      </div>
    )
  }else{
    return (
      <li className='userit'>
         {t('common.nousers')}
      </li>
    )
  }
}

export default Users