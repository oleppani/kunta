import React from 'react'


import {
  Link,
  useParams
} from "react-router-dom"
import {useTranslation} from "react-i18next"



const Sections = ({sections, meetings}) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  let agenda=''
  agenda = useParams().id
  let meet=[]
  if(agenda){
    meet= meetings.filter(function(el) {
      return el.id===agenda
    })
  }
  
  //console.log(meet)
  if(agenda){
      let valittu = sections.filter(function(el) {
        return el.agendaid===agenda
      })
      return(
      <div>
        {meet.map(p => (
        <h3>{t('headers.sectionsinmeeting')} {p.organid} {p.meetingtext}</h3>
        ))}
        <ul>
              {valittu.map(section => (
                 <li>
                    <Link to={`/sections/${section.id}`}>{section.casetext}</Link>
                  </li>
              ))}
        </ul>
      </div>
    )
    }else{
      return(
        <div>
          {meet.map(p => (
          <h3>{t('headers.sectionsinmeeting')} {p.organid} {p.meetingtext}</h3>
          ))}
          <ul>
            
                {sections.map(section => (
                  <li>
                      <Link to={`/sections/${section.id}`}>{section.casetext}</Link>
                 </li>
                ))}
          </ul>      
        </div>
      )
    }
}

export default Sections