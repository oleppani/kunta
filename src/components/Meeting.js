import React from 'react'
import {
  Link,
  useParams
} from "react-router-dom"

import {
  Button
} from '@material-ui/core'


const Meeting = ({ meeting, toggleImportance }) => {
  
  let organ=useParams().chosenorgan
  let valittu = meeting.filter(function(el) {
    return el.organid===organ
  })
  //console.log(comment.data)
  //let comments =[]
  if(meeting){
    return (
      <div>
        <br /><br />
        {valittu.map(p =>
        <Button variant="contained" size='medium' color="inherit" component={Link} to={`/agendas/${p.id}`}>
          {p.meetingtext} {p.organid}
        </Button>
        )}
      </div>
      )
    
  }else{
    return (
      <li className='meeting'>
         Ei kokouksia
      </li>
    )
  }
}

export default Meeting