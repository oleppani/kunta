import React from 'react'
import {
  Link
} from "react-router-dom"

const Meetings = ({ meeting, toggleImportance }) => {
  
  
    
  console.log(meeting)
  
  if(meeting){
    return (
      
      <ul>
            {meeting.map(meet => (
              <li>
                  <Link to={`/agendas/${meet.id}`}>{meet.organid} </Link> {meet.meetingtext} {meet.meetingmunicipality}
               </li>
            ))}
      </ul>
    )
  }else{
    return (
      <li className='meeting'>
         Ei kokouksia
      </li>
    )
  }
}

export default Meetings