import React  from 'react'
import {
  useParams
} from "react-router-dom"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper
} from '@material-ui/core'

const Proposals = ({ proposals, sections, setError, votes }) => {

  //const [userid, setUserid] = useState('')  


  /*const uusi = async (event) => {
    console.log(event)
    const aika = Date.now()
    const pvm = new Date(aika)
    createVoting({
      variables: { proposalid:event, userid: userid.length > 0 ? userid : 'tyhjä', votedatetime:pvm.toString(), sectionid:sectionss }
     })
 
  }
*/

  let sectionss=''
  sectionss = useParams().id
  let valittu = sections.filter(function(el) {
    return el.id===sectionss
  })
  console.log(proposals)
  let valitut = proposals.filter(function(el) {
    return el.sectionid===sectionss
  })
  
  let aanet= votes.filter(function(aa) {
    return aa.sectionid===sectionss
  } )
  let aanetasiat= aanet.map(p => p.proposalid)
  // eslint-disable-next-line
  let maarat = Object.values(aanet.reduce((obj, { proposalid }) => {
    if (obj[proposalid] === undefined)
       obj[proposalid] = { proposalid: proposalid, occurrences: 1 };
    else
       obj[proposalid].occurrences++;
    return obj;
 }, {}));
 /*let maara = maarat.map(o => {
  const sisalto = {};

  sisalto[o.proposalid] = o.occurrences
 return sisalto})
*/
  //Tähän uuden parametrin count lisääminen valitut arrayhin sen arvoksi maarat arraystä saman commentid:n parametrin occurrences arvo
  let uus = valitut.map((item) => 
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

  let viranaanet = aanetasiat.filter(function(dd){
    return dd==='1'}
  )
  console.log(viranaanet)
  //let proposals =[]
  if(proposals){
    return (
      <div>
        <h3>Päätösesitykset</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow key='1'>
                {valittu.map(section => ( <TableCell><b>Viranhaltijan päätösesitys:</b> {section.proposalforadecision}       
              </TableCell>))}
              <TableCell></TableCell>
              <TableCell>{viranaanet.length} ääntä</TableCell>
            </TableRow>
            <TableRow key='2'>
              <TableCell>
                <b>Vaihtoehtoiset päätösesitykset:</b>
              </TableCell>
            </TableRow>
            {uus.map(prop => (
              <TableRow key={prop.id}>
                <TableCell>
                  {prop.proposaldatetime}
                </TableCell>
                <TableCell>
                  {prop.proposaltext} 
                </TableCell>
                <TableCell>{prop.maara} ääntä</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    )
  }else{
    return (
      <li className='proposal'>
         Ei vaihtoehtoisia päätösehdotuksia
      </li>
    )
  }
}

export default Proposals