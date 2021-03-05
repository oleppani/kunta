import React from 'react'
import {
  Link
} from "react-router-dom"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@material-ui/core'


const Initiatives = ({initiatives, setError, votes}) => {
  //const [userid, setUserid] = useState('') 
  



  //let sectionss=''
 /* sectionss = useParams().id
 
  let valittu = sections.filter(function(el) {
    return el.id===sectionss
  })
  console.log(proposals)
  let valitut = proposals.filter(function(el) {
    return el.sectionid===sectionss
  })
 */
  let aanet= votes.filter(function(aa) {
    let paluu=[]
    if(aa.initiativeid){
      paluu=aa.initiativeid.length>0
    }
    return paluu
  } )
  

  let aanetasiat= aanet.map(p => p.initiativeid)
  let maarat = Object.values(aanet.reduce((obj, { initiativeid }) => {
    if (obj[initiativeid] === undefined)
       obj[initiativeid] = { initiativeid: initiativeid, occurrences: 1 };
    else
       obj[initiativeid].occurrences++;
    return obj;
 }, {}));
 // eslint-disable-next-line
 let maara = maarat.map(o => {
  const sisalto = {};

  sisalto[o.initiativeid] = o.occurrences
 return sisalto})

  //Tähän uuden parametrin count lisääminen valitut arrayhin sen arvoksi maarat arraystä saman commentid:n parametrin occurrences arvo
  let uus = initiatives.map((item) => 
    Object.assign({}, item, {maara:aanetasiat.filter(function(aa) {
      if(aa === null){
        aa=[]
      }
      return aa===item.id}).length
    }))
  /*for(let i=0;i<valitut.length;i++){
    valitut[i].maara=0
    Object.preventExtensions(valitut)
  }*/
  //const maarat = aanetasiat => aanetasiat.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
  console.log(uus)
  console.log(aanetasiat)

  return(

  <div>
    <h2>Aloitteet</h2>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {uus.map(ini => (
            <TableRow key={ini.id}>
              <TableCell>
                <Link to={`/initiatives/${ini.id}`}>{ini.initiativetext}</Link>
              </TableCell>
              <TableCell>
                {ini.organid}
              </TableCell>
              <TableCell>{ini.maara} ääntä</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  </div>
)
}

export default Initiatives