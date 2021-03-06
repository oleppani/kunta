import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_PERSONS, CREATE_PERSON } from '../queries'
const stylea = {
  background: 'white',
  opacity: 0.9
}
const PersonForm = ({ setError }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')


  const [ createPersom ] = useMutation(CREATE_PERSON, {
    refetchQueries: [  {query: ALL_PERSONS} ],
    onError: (error) => {
      setError('virhe')
      //error.graphQLErrors[0].message
      console.log(error)
    }
  })

  const submit = async (event) => {
    event.preventDefault()

    createPersom({
      variables: { name, phone, street, city }
    })

    setName('')
    setPhone('')
    setStreet('')
    setCity('')
  }

  return (
    <div style={stylea}>
      <h2>create new</h2>
      <form onSubmit={submit}>
        <div>
          name <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          phone <input
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div>
          street <input
            value={street}
            onChange={({ target }) => setStreet(target.value)}
          />
        </div>
        <div>
          city <input
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
        </div>
        <button type='submit'>add!</button>
      </form>
    </div>
  )
}

export default PersonForm