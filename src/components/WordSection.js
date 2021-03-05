import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { useQuery } from '@apollo/client'
import { ALL_SECTIONS } from '../queries'
//import { useLazyQuery } from '@apollo/client'


/*
const data = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Babel.js', count: 7 },
  { value: 'ECMAScript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Mocha', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'Angular.js', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'Flow', count: 30 },
  { value: 'NPM', count: 11 },
]
*/
/* CSS:
@keyframes blinker {
  50% { opacity: 0.0; }
}
*/

// custom renderer is function which has tag, computed font size and
// color as arguments, and returns react component which represents tag
// custom random color options
// see randomColor package: https://github.com/davidmerfield/randomColor
const options = {
  luminosity: 'dark',
  hue: 'blue',
}

const WordSection = ({ props }) => {

  

  
//const [getSections, result] = useLazyQuery(ALL_SECTIONS)

let count = function(ary, classifier) {
  return ary.reduce(function(counter, item) {
      var p = (classifier || String)(item)
      counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1
      return counter
  }, {})
  
}
function sanitizeString(str){
  str = str.replace(/[^a-ö0-9áéíóúñü .,._-]/gim,"");
  return str.trim();
}

const sectionss = useQuery(ALL_SECTIONS, {
  pollInterval: 5000  
})
let sections=[]
let sectionsss = []
//let sectionssss = []
let yhdistetty =[]
let maarat={}
let lopullinen=[]
if(sectionss.data){
  sections = sectionss.data.allSections
  sectionsss =sections.map(s => s.casetext.split(' '))
  for(let i = 0; i <sectionsss.length;i++){
    for(let j=0; j < sectionsss[i].length;j++){
      let sanitize= sanitizeString(sectionsss[i][j])
      let piste = sanitize.replace(".", "")
      let pilkku = piste.replace(",", "")
      yhdistetty.push(pilkku.toLowerCase())
    }
  }
  maarat=count(yhdistetty)
  let result = Object.keys(maarat).map((key) => [key, maarat[key]])
  lopullinen = result.map(p => ({value: p[0], count: p[1]}))
  console.log(lopullinen)
}

  
return(
  <TagCloud
    minSize={12}
    maxSize={35}
    colorOptions={options}
    tags={lopullinen}
    className='simple-cloud '
    onClick={tag => console.log('clicking on tag:', tag)}
  />
)
}
export default WordSection