import React, {useState} from 'react';
import { v4 as uuid } from 'uuid' // GROSS
import './App.css';
import TeamForm from './Form'
import Member from './Member'

const initialTeamList = [

  {
    id: uuid(),
    name: 'James',
    email: 'j@j.com',
    role: 'full stack web dev',
  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

export default function App() {

  const [members, setMembers] = useState(initialTeamList)

  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    const newTeam = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    }
    setMembers([...members, newTeam])
    setFormValues(initialFormValues)
  }

  return (
<div className='container'>
      <header><h1>Team App</h1></header>
      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }

      <TeamForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

// export default App;
