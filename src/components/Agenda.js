import React from 'react'
const stylea = {
  background: 'white',
  opacity: 0.9
}
const Agenda = ({ agendas,sections }) => {
  console.log(sections)
  return (
    <div>
      <h2>{agendas.content}</h2>
      <div>{agendas.user}</div>
      <div><strong>{agendas.important ? 'tärkeä' : ''}</strong></div>
    </div>
  )
}

export default Agenda