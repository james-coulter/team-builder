import React, {useState} from 'react';
import { v4 as uuid } from 'uuid' // GROSS
import './App.css';
import TeamFriend from './Form'

const initialTeamList = [
  // 👉 the shape of the actual friend object from API
  {
    id: uuid(),
    name: 'Michael',
    email: 'michael@michael.com',
    role: 'frontend engineer',
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
            <Friend key={friend.id} details={friend} />
          )
        })
      }

      <FriendForm
        // 🔥 STEP 2 - THE FORM WANTS ITS FOOD!!!!
        // check implementation of FriendForm
        // to see what props it expects
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

// export default App;
