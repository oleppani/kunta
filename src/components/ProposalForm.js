import React, { useState, useEffect} from 'react'
import { useMutation } from '@apollo/client'
import {
  useParams
} from "react-router-dom"
import { ALL_PROPOSALS, CREATE_PROPOSAL } from '../queries'
import {
  TextField,
  Button
} from '@material-ui/core'
import {useTranslation} from "react-i18next"

const ProposalForm = ({ setError }) => {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  const [proposaltext, setText] = useState('')
  const [proposaldatetime, setDate] = useState('')
  const [sectionid, setSection] = useState('')


  const [ createProposal ] = useMutation(CREATE_PROPOSAL, {
    refetchQueries: [  {query: ALL_PROPOSALS} ],
    onError: (error) => {
      setError('virhe')
      //error.graphQLErrors[0].message
      console.log(error)
    }
  })
  const uusi = async (event) => {
    console.log(event)
    const aika = Date.now()
    const pvm = new Date(aika)
    setDate(pvm.toString())
    setText(event)
  }
  let sectionss=''
  sectionss = useParams().id
  
  const submit = async (event) => {
    event.preventDefault()

    createProposal({
      variables: { proposaltext, proposaldatetime,  sectionid }
    })

    setText('')
    setDate('')
    setSection(sectionss)
  }
  useEffect(() => {
    setSection(sectionss)
  }, [sectionss])
  return (
    <div>
      <h2>{t('headers.addproposal')}</h2>
      <form onSubmit={submit}>
        <div>
        {t('common.proposal')} <TextField
            value={proposaltext}
            onChange={({ target }) => uusi(target.value)}
          />
        </div>
        <div>
        {t('common.section')} <TextField
            value={sectionid}
            onChange={({ target }) => setSection(target.value)}
          />
        </div>
        <Button  variant="contained" style={{backgroundColor: "#07575B", color:"#C4DFE6",fontSize: "14px" }} type='submit'>{t('common.add')}</Button>
      </form>
    </div>
  )
}

export default ProposalForm